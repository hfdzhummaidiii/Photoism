import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera as CameraIcon, ArrowLeft, FlipHorizontal, SwitchCamera } from 'lucide-react';

const Camera = ({ onCapture, onBack, selectedFrame, targetCount }) => {
  // 1. SAFETY CHECK (SATPAM)
  if (!selectedFrame) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#111', color: 'white' }}>
        <p>Ups, data frame tidak ditemukan!</p>
        <button onClick={onBack} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>
          Kembali Pilih Frame
        </button>
      </div>
    );
  }

  // --- STATE & REF ---
  const webcamRef = useRef(null);
  const [photos, setPhotos] = useState([]); // Nyimpen foto sementara
  const [countdown, setCountdown] = useState(null); // Timer (3, 2, 1...)
  const [flash, setFlash] = useState(false); // Efek kedip putih
  
  // Settingan Kamera
  const [isMirrored, setIsMirrored] = useState(true); // Default Mirror ON
  const [facingMode, setFacingMode] = useState("user"); // 'user' (depan) atau 'environment' (belakang)

  // --- LOGIKA HITUNG RASIO KAMERA ---
  const getSlotRatio = () => {
    if (selectedFrame.isCustomPos && selectedFrame.customPos && selectedFrame.customPos[0]) {
      const frameW = parseInt(selectedFrame.width || '400');
      const frameH = parseInt(selectedFrame.height || '725');
      const slot = selectedFrame.customPos[0];
      
      const parsePct = (val) => parseFloat(val) / 100;
      const slotW = frameW * parsePct(slot.width);
      const slotH = frameH * parsePct(slot.height);
      
      return slotW / slotH;
    }
    return 4 / 3;
  };

  const targetRatio = getSlotRatio();
  
  // Logic Target: Kalau dari Retake (targetCount ada) pake itu, kalau ga pake slot normal
  const finalTargetCount = targetCount || (selectedFrame.duplicate ? selectedFrame.slots / 2 : selectedFrame.slots);

  // --- FUNGSI TOGGLE ---
  const toggleMirror = () => setIsMirrored(!isMirrored);
  
  const switchCamera = () => {
    setFacingMode(prev => (prev === "user" ? "environment" : "user"));
    if (facingMode === "user") setIsMirrored(false); 
    else setIsMirrored(true);
  };

  // --- PROSES JEPRET (CAPTURE) ---
  const capture = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);

    const imageSrc = webcamRef.current.getScreenshot();
    
    const newPhotos = [...photos, imageSrc];
    setPhotos(newPhotos);

    // Cek apakah target terpenuhi?
    if (newPhotos.length >= finalTargetCount) {
      setCountdown(null); 
      setTimeout(() => {
        onCapture(newPhotos); // Kirim ke App.jsx
      }, 500); 
    } else {
      setTimeout(() => {
        setCountdown(3);
      }, 1000);
    }
  };

  // --- LOGIKA TIMER MUNDUR ---
  useEffect(() => {
    let timer;
    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      capture();
    }
    return () => clearTimeout(timer);
  }, [countdown]); 

  const startPhotoSession = () => {
    if (photos.length === 0) {
      setCountdown(3);
    } else {
      setCountdown(3);
    }
  };

  return (
    <div className="camera-container" style={{ 
      background: '#111', height: '100vh', width: '100vw', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden'
    }}>
      
      {/* 1. LAYER FLASH PUTIH */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'white', opacity: flash ? 1 : 0,
        transition: 'opacity 0.2s', pointerEvents: 'none', zIndex: 99
      }} />

      {/* 2. HEADER INFO */}
      <div style={{ 
        position: 'absolute', top: '20px', left: '20px', right: '20px', 
        display: 'flex', justifyContent: 'space-between', zIndex: 50 
      }}>
        <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '50%', border: 'none', color: 'white', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <div style={{ color: 'white', fontWeight: 'bold', background: 'rgba(0,0,0,0.5)', padding: '8px 20px', borderRadius: '20px', backdropFilter: 'blur(5px)' }}>
          {finalTargetCount === 1 ? 'RETAKE MODE' : `${photos.length} / ${finalTargetCount}`}
        </div>
      </div>

      {/* 3. LAYAR KAMERA */}
      <div className="camera-mask-wrapper" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px', 
        aspectRatio: targetRatio, 
        overflow: 'hidden',
        borderRadius: '20px',
        border: '4px solid white',
        boxShadow: '0 0 50px rgba(0,0,0,0.5)',
        zIndex: 10
      }}>
        
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          mirrored={isMirrored}
          videoConstraints={{
            facingMode: facingMode,
            width: 1280, height: 720, aspectRatio: targetRatio
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {countdown !== null && (
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            fontSize: '120px', fontWeight: '900', color: 'white', 
            textShadow: '0 5px 20px rgba(0,0,0,0.5)', zIndex: 30
          }}>
            {countdown === 0 ? '.' : countdown}
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px', color: '#888', fontSize: '0.8rem', fontStyle:'italic' }}>
        {targetRatio > 1.1 ? 'Landscape Mode' : targetRatio < 0.9 ? 'Portrait Mode' : 'Square Mode'}
      </div>

      {/* 4. TOMBOL KONTROL BAWAH */}
      <div style={{ 
        marginTop: '30px', display: 'flex', gap: '40px', alignItems: 'center', zIndex: 50 
      }}>
        
        <button onClick={toggleMirror} style={{
          background: isMirrored ? '#FFD54F' : 'rgba(255,255,255,0.2)', 
          padding: '15px', borderRadius: '50%', border: 'none', cursor: 'pointer', 
          color: isMirrored ? 'black' : 'white', transition: 'all 0.2s'
        }}>
          <FlipHorizontal size={24} />
        </button>

        {countdown === null ? (
          <button 
            onClick={startPhotoSession}
            style={{
              width: '80px', height: '80px', borderRadius: '50%', 
              background: 'white', border: '8px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transform: 'scale(1)', transition: 'transform 0.1s',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <CameraIcon size={32} color="#333" />
          </button>
        ) : (
          <div style={{ width: '80px', height: '80px', display:'flex', alignItems:'center', justifyContent:'center' }}>
             <div className="loader-spin" style={{ width:'40px', height:'40px', border:'4px solid rgba(255,255,255,0.3)', borderTop:'4px solid white', borderRadius:'50%' }}></div>
          </div>
        )}

        <button onClick={switchCamera} style={{
          background: 'rgba(255,255,255,0.2)', 
          padding: '15px', borderRadius: '50%', border: 'none', cursor: 'pointer', color: 'white'
        }}>
          <SwitchCamera size={24} />
        </button>

      </div>
      
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .loader-spin { animation: spin 1s linear infinite; }
      `}</style>

    </div>
  );
};

export default Camera;
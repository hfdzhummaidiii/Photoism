import React, { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import { 
  Heart, Star, Sparkles, Music, Cloud, Sun, Moon, 
  Zap, Smile, Flower, Anchor, Camera, Film,
  Coffee, Mail, Rocket, Crown, Leaf, MessageCircle, 
  PenTool, Ruler, Scissors, Gift, MapPin, Eye,
  Flame, Droplet, Fish, Ghost, Skull, 
  Trophy, Medal, Diamond, Gem, Glasses, 
  Watch, Key, Lock, Umbrella, Gamepad2, 
  Headphones, Mic, Speaker, Tv, DollarSign, 
  Utensils, Circle, Disc, Bird, Cat, Dog,
  Wand, RefreshCcw, Check, Loader,
  Move, ZoomIn, RotateCw, X 
} from 'lucide-react';

const StickerMap = {
  'heart': Heart, 'star': Star, 'sparkles': Sparkles, 'music': Music,
  'cloud': Cloud, 'sun': Sun, 'moon': Moon, 'zap': Zap, 'smile': Smile,
  'flower': Flower, 'anchor': Anchor, 'camera': Camera, 'film': Film,
  'coffee': Coffee, 'mail': Mail, 'rocket': Rocket, 'crown': Crown,
  'leaf': Leaf, 'chat': MessageCircle, 'pen': PenTool, 'ruler': Ruler,
  'scissors': Scissors, 'gift': Gift, 'pin': MapPin, 'eye': Eye,
  'flame': Flame, 'water': Droplet, 'fish': Fish, 'ghost': Ghost, 
  'skull': Skull, 'trophy': Trophy, 'medal': Medal, 'diamond': Diamond, 
  'gem': Gem, 'glasses': Glasses, 'watch': Watch, 'key': Key, 
  'lock': Lock, 'umbrella': Umbrella, 'game': Gamepad2, 
  'headphone': Headphones, 'mic': Mic, 'speaker': Speaker, 
  'tv': Tv, 'money': DollarSign, 'food': Utensils, 'circle': Circle, 
  'cd': Disc, 'bird': Bird, 'cat': Cat, 'dog': Dog
};

const filterOptions = [
  { name: 'Normal', value: 'none', color: '#ffffff' },
  { name: 'BW Classic', value: 'grayscale(100%) contrast(1.1)', color: '#333333' },
  { name: 'BW Noir', value: 'grayscale(100%) contrast(1.5) brightness(0.9)', color: '#000000' },
  { name: 'Vintage', value: 'sepia(50%) contrast(0.8) brightness(1.2) saturate(0.8)', color: '#d7ccc8' },
  { name: 'Sepia Deep', value: 'sepia(100%) contrast(0.9) saturate(1.2)', color: '#8d6e63' },
  { name: 'Warm Glow', value: 'saturate(1.3) brightness(1.05) hue-rotate(-10deg)', color: '#ffcc80' },
  { name: 'Golden Hour', value: 'sepia(0.3) saturate(1.6) contrast(1.1) hue-rotate(-10deg)', color: '#ffb74d' },
  { name: 'Cool Breeze', value: 'saturate(0.9) brightness(1.05) hue-rotate(10deg)', color: '#90caf9' },
  { name: 'Morning Mist', value: 'brightness(1.1) contrast(0.8) saturate(0.8) hue-rotate(5deg)', color: '#cfd8dc' },
  { name: 'Soft Fade', value: 'contrast(0.8) brightness(1.1)', color: '#eceff1' },
  { name: 'Dramatic', value: 'contrast(1.2) saturate(1.3)', color: '#ff8a80' },
  { name: 'Cinematic', value: 'contrast(1.2) saturate(1.1) brightness(0.9) sepia(0.2)', color: '#546e7a' },
  { name: 'Retro Pop', value: 'saturate(2) contrast(1.1) hue-rotate(10deg)', color: '#ffff00' },
  { name: 'Pastel Dream', value: 'brightness(1.1) saturate(0.8) contrast(0.9) sepia(0.1)', color: '#f8bbd0' },
  { name: 'Rose Gold', value: 'sepia(0.3) hue-rotate(315deg) saturate(1.3) contrast(0.9)', color: '#f48fb1' },
  { name: 'Cyber', value: 'contrast(1.2) hue-rotate(180deg) saturate(1.2)', color: '#b39ddb' },
];

const Result = ({ photos, selectedFrame, onRetake, onFinish, onRetakeSingle }) => {
  const [activeFilter, setActiveFilter] = useState(filterOptions[0].value);
  const [isSaving, setIsSaving] = useState(false);
  const stripRef = useRef(null);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayPhotos = selectedFrame.duplicate ? [...photos, ...photos] : photos;
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(null);
  
  const [photoAdjustments, setPhotoAdjustments] = useState(
    Array(displayPhotos.length).fill({ zoom: 1, x: 0, y: 0, rotate: 0 })
  );

  useEffect(() => {
     if (photoAdjustments.length !== displayPhotos.length) {
        setPhotoAdjustments(Array(displayPhotos.length).fill({ zoom: 1, x: 0, y: 0, rotate: 0 }));
     }
  }, [displayPhotos.length]);

  const updateAdjustment = (key, value) => {
    if (selectedPhotoIdx === null) return;
    setPhotoAdjustments(prev => {
      const newAdj = [...prev];
      if (newAdj[selectedPhotoIdx]) {
          newAdj[selectedPhotoIdx] = { ...newAdj[selectedPhotoIdx], [key]: value };
      }
      return newAdj;
    });
  };

  const containerStyle = { ...selectedFrame.style };
  if (selectedFrame.isImageFrame) {
    delete containerStyle.backgroundImage; 
  }

  // === FUNGSI DOWNLOAD: SABAR & PAKSA ===
  // === FUNGSI DOWNLOAD SAKTI V.FINAL (MANUAL BASE64 INJECTION) ===
  const handleDownload = async () => {
    if (!stripRef.current) return;
    setSelectedPhotoIdx(null); 
    setIsSaving(true);
    let clonedElement = null;
    let loadingOverlay = null;

    try {
      // 1. BUAT LAYAR LOADING
      loadingOverlay = document.createElement('div');
      Object.assign(loadingOverlay.style, {
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: '#ffffff', zIndex: '99999', 
        display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center',
        color: '#333', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'sans-serif'
      });
      loadingOverlay.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 15px;">🚀</div>
        <span>Sedang Meracik Foto...</span>
        <span style="font-size:0.8rem; margin-top:5px; color:#888">Tunggu bentar ya, jangan keluar!</span>
      `;
      document.body.appendChild(loadingOverlay);

      await new Promise(resolve => setTimeout(resolve, 300));

      // 2. KLONING
      const originalElement = stripRef.current;
      clonedElement = originalElement.cloneNode(true);

      const realWidth = selectedFrame.width || '320px'; 
      const realHeight = selectedFrame.height || 'auto';

      // 3. POSISIKAN KLONINGAN (DI DEPAN MUKA)
      Object.assign(clonedElement.style, {
        position: 'fixed', top: '0', left: '0',                
        width: realWidth, minWidth: realWidth, height: realHeight,       
        transform: 'none', margin: '0',
        padding: selectedFrame.isCustomPos ? '0' : '20px', 
        backgroundColor: selectedFrame.style.backgroundColor || 'white',
        zIndex: '99990', borderRadius: '0', visibility: 'visible'         
      });
      document.body.appendChild(clonedElement);

      // --- [JURUS RAHASIA: KONVERSI MANUAL KE BASE64] ---
      // Kita gak percaya sama html-to-image buat nge-fetch gambar blob.
      // Kita lakuin sendiri manual!
      
      const originalImages = Array.from(originalElement.getElementsByTagName('img'));
      const clonedImages = Array.from(clonedElement.getElementsByTagName('img'));

      // Loop semua gambar, ubah jadi Base64
      for (let i = 0; i < originalImages.length; i++) {
        const original = originalImages[i];
        const cloned = clonedImages[i];

        // Bikin kanvas sementara
        const canvas = document.createElement('canvas');
        canvas.width = original.naturalWidth || original.width;
        canvas.height = original.naturalHeight || original.height;
        const ctx = canvas.getContext('2d');
        
        // Gambar ulang image asli ke kanvas
        ctx.drawImage(original, 0, 0);
        
        // Ambil datanya sebagai text Base64 (Data URL)
        // Ini bikin gambar jadi "teks", jadi browser HP gak bakal ngeblokir lagi
        try {
            const base64Data = canvas.toDataURL('image/png');
            cloned.src = base64Data; // SUNTIK DATA BARU
            cloned.removeAttribute('crossOrigin'); // Hapus atribut ribet
            cloned.loading = 'eager';
        } catch (e) {
            console.warn("Gagal convert gambar ke base64 (mungkin tainted)", e);
            // Kalo gagal, kita biarin aja pake src lama, siapa tau hoki
        }
      }
      // ----------------------------------------------------

      // 4. TUNGGU BROWSER NAFAS (2 DETIK)
      // Kasih waktu browser ngerender ulang data Base64 tadi
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 5. CAPTURE
      const isSmallScreen = window.innerWidth < 768;
      const dataUrl = await toPng(clonedElement, {
        cacheBust: false, // WAJIB FALSE
        pixelRatio: isSmallScreen ? 2 : 3, 
        quality: 1.0,
        backgroundColor: null,
        skipFonts: true,
      });

      // 6. DOWNLOAD
      const link = document.createElement("a");
      link.download = `MEMORIA-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => { setIsSaving(false); }, 1000);

    } catch (error) {
      console.error("Gagal save:", error); 
      setIsSaving(false); 
      alert("Gagal menyimpan. Coba refresh browser.");
    } finally {
      if (clonedElement && document.body.contains(clonedElement)) {
        document.body.removeChild(clonedElement);
      }
      if (loadingOverlay && document.body.contains(loadingOverlay)) {
        document.body.removeChild(loadingOverlay);
      }
    }
  };

  return (
    <div style={{ 
      display: 'flex', width: '100vw', minHeight: 'calc(100vh - 80px)', 
      height: isMobile ? 'auto' : 'calc(100vh - 80px)', overflow: isMobile ? 'visible' : 'hidden', 
      fontFamily: 'sans-serif', flexDirection: isMobile ? 'column' : 'row', background: '#f8f9fa'
    }}>
      
      {/* 1. PREVIEW AREA */}
      <div style={{ 
        flex: isMobile ? 'none' : 1, width: '100%', height: isMobile ? 'auto' : '100%', 
        overflowY: isMobile ? 'visible' : 'auto', position: 'relative',
        backgroundColor: '#e9ecef', backgroundImage: 'radial-gradient(#adb5bd 1px, transparent 1px)',
        backgroundSize: '20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: isMobile ? '20px 0' : '0'
      }}>
        <div style={{ margin: 'auto', padding: '40px', transform: isMobile ? 'scale(0.85)' : 'none', transformOrigin: 'center center' }}>
          
          {/* STRIP UTAMA (YANG DILIHAT USER) */}
          <div ref={stripRef} className="final-strip" style={{
              ...containerStyle,
              width: selectedFrame.width || '300px', 
              height: selectedFrame.height || 'auto',
              position: 'relative', 
              padding: selectedFrame.isCustomPos ? '0' : '20px',
              display: selectedFrame.isCustomPos ? 'block' : 'flex', flexDirection: 'column',
              gap: '15px', boxSizing: 'border-box', 
              boxShadow: '0 20px 50px -10px rgba(0,0,0,0.3)', 
              transform: 'scale(1)', 
              backgroundColor: selectedFrame.style.backgroundColor || 'white',
              border: selectedFrame.isImageFrame ? 'none' : '10px solid white',
            }}>
            
            {displayPhotos.map((pic, i) => {
              const pos = selectedFrame.customPos ? selectedFrame.customPos[i] : null;
              const adj = photoAdjustments[i] || { zoom: 1, x: 0, y: 0, rotate: 0 }; 
              const isSelected = selectedPhotoIdx === i;

              const wrapperStyle = pos ? {
                // KASUS 1: FRAME BERGAMBAR
                position: 'absolute', top: pos.top, left: pos.left,
                width: pos.width, height: pos.height, 
                transform: `rotate(${pos.rotate || '0deg'})`,
                borderRadius: '2px', overflow: 'hidden', zIndex: 10, cursor: 'pointer',
                border: selectedFrame.isImageFrame ? 'none' : '4px solid white', boxSizing: 'border-box',
                boxShadow: isSelected ? '0 0 0 4px #2196F3' : 'none', 
                filter: activeFilter 
              } : {
                // KASUS 2: FRAME POLOS (PADDING HACK)
                width: '100%', height: 0, paddingBottom: '75%', position: 'relative',
                borderRadius: selectedFrame.style.borderRadius ? '4px' : '0',
                marginBottom: i === displayPhotos.length -1 ? 0 : '10px',
                overflow: 'hidden', zIndex: 10, cursor: 'pointer',
                border: selectedFrame.isImageFrame ? 'none' : '5px solid white', boxSizing: 'border-box',
                boxShadow: isSelected ? '0 0 0 4px #2196F3' : 'none', 
                filter: activeFilter
              };

              return (
                <div key={i} style={wrapperStyle} onClick={(e) => { e.stopPropagation(); setSelectedPhotoIdx(i); }}>
                  <img 
                    src={pic} 
                    alt="photo" 
                    style={{ 
                      position: pos ? 'static' : 'absolute', 
                      top: 0, left: 0,
                      width: '100%', height: '100%', objectFit: 'cover', 
                      transform: `scale(${adj.zoom}) translate(${adj.x}px, ${adj.y}px) rotate(${adj.rotate}deg)`, 
                    }} 
                  />
                </div>
              );
            })}

            {selectedFrame.isImageFrame && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: selectedFrame.style.backgroundImage, backgroundSize: '100% 100%', pointerEvents: 'none', zIndex: 20 }} />
            )}

            {selectedFrame.stickers && selectedFrame.stickers.map((stk, idx) => {
              if (stk.isIcon && StickerMap[stk.icon]) {
                const IconComponent = StickerMap[stk.icon];
                return (
                  <div key={idx} style={{ position: 'absolute', ...stk.style, zIndex: 50, pointerEvents: 'none', display: 'flex' }}>
                    <IconComponent color={stk.color} fill={stk.fill} size={stk.size} />
                  </div>
                );
              } return null;
            })}
            
            {!selectedFrame.isImageFrame && (
                <div style={{ textAlign:'center', fontWeight:'900', fontSize:'0.7rem', color: selectedFrame.textColor, marginTop: '10px', zIndex: 15, letterSpacing:'2px' }}>MEMORIA</div>
            )}
          </div>
        </div>
      </div>

      {/* 2. CONTROLS AREA */}
      <div style={{ 
        width: isMobile ? '100%' : '380px', height: isMobile ? 'auto' : '100%', 
        background: 'white', borderLeft: isMobile ? 'none' : '1px solid #ddd', 
        borderTop: isMobile ? '1px solid #ddd' : 'none',
        display: 'flex', flexDirection: 'column', padding: '20px 30px 40px 30px', 
        zIndex: 50, boxShadow: '-5px 0 20px rgba(0,0,0,0.05)',
      }}>
        
        {!isMobile && (
          <div style={{ marginBottom: '15px', textAlign: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800' }}>FINALIZE</h2>
            <p style={{ margin: '5px 0 0', fontSize: '0.8rem', color: '#888' }}>Sentuh foto untuk edit</p>
          </div>
        )}

        <div style={{ flex: 1, marginBottom: '20px' }}>
            {selectedPhotoIdx !== null && photoAdjustments[selectedPhotoIdx] ? (
              // EDIT MODE
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #eee', paddingBottom:'8px' }}>
                  <span style={{ fontWeight:'bold', fontSize:'0.9rem' }}>EDIT FOTO #{selectedPhotoIdx + 1}</span>
                  <button onClick={() => setSelectedPhotoIdx(null)} style={{ background:'#eee', border:'none', borderRadius:'50%', padding:'5px', cursor:'pointer' }}><X size={16} /></button>
                </div>
                <button onClick={() => { if (onRetakeSingle) onRetakeSingle(selectedPhotoIdx); }} style={{ width: '100%', padding: '10px', background: '#FFEBEE', color: '#D32F2F', border: '1px solid #FFCDD2', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Camera size={14} /> RETAKE
                </button>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[
                    { label: 'ZOOM', icon: ZoomIn, key: 'zoom', min: 0.5, max: 3, step: 0.1 },
                    { label: 'ROTASI', icon: RotateCw, key: 'rotate', min: -45, max: 45, step: 1 },
                    { label: 'GESER X', icon: Move, key: 'x', min: -100, max: 100, step: 1 },
                    { label: 'GESER Y', icon: Move, key: 'y', min: -100, max: 100, step: 1, rotateIcon: 90 },
                  ].map((item, idx) => (
                    <div key={idx} style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'5px', fontSize:'0.7rem', fontWeight:'bold', color:'#555', marginBottom:'5px' }}>
                        <item.icon size={12} style={item.rotateIcon ? { transform: `rotate(${item.rotateIcon}deg)` } : {}} /> {item.label}
                      </div>
                      <input type="range" min={item.min} max={item.max} step={item.step} value={photoAdjustments[selectedPhotoIdx][item.key]} onChange={(e) => updateAdjustment(item.key, parseFloat(e.target.value))} style={{ width: '100%', cursor: 'pointer', height:'4px' }} />
                    </div>
                  ))}
                </div>
                <button onClick={() => setSelectedPhotoIdx(null)} style={{ width: '100%', padding: '10px', background: '#333', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>SELESAI</button>
              </div>
            ) : (
              // FILTER MODE
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'10px', color:'#333', fontWeight:'bold', fontSize:'0.9rem' }}>
                  <Wand size={16} fill="orange" color="orange" /><span>FILTER EFEK</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {filterOptions.map((filter, idx) => (
                    <button key={idx} onClick={() => setActiveFilter(filter.value)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: activeFilter === filter.value ? '#333' : 'white', border: '1px solid #eee', borderRadius: '8px', cursor: 'pointer' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: filter.color, border: '1px solid #ddd' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: activeFilter === filter.value ? '#fff' : '#444' }}>{filter.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #eee', display: 'flex', gap: '10px', paddingBottom: isMobile ? '20px' : '0' }}>
          <button onClick={onRetake} disabled={isSaving} style={{ flex: 1, background: 'white', color: '#555', border: '2px solid #eee', padding: '15px', borderRadius: '10px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
            <RefreshCcw size={16} /> ULANG
          </button>
          <button onClick={handleDownload} disabled={isSaving} style={{ flex: 1.5, background: isSaving ? '#ccc' : '#FFD54F', color: '#000', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: '900', fontSize: '0.9rem', cursor: isSaving ? 'wait' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
            {isSaving ? <Loader className="spin" size={18} /> : <Check size={18} />} SIMPAN
          </button>
        </div>
      </div>

      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #ddd; borderRadius: 3px; }
      `}</style>
    </div>
  );
};

export default Result;
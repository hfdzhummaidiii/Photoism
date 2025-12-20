import React, { useState, useRef, useEffect } from 'react';
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

  // === HELPER: LOAD IMAGE SECARA MANUAL ===
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; 
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  };

  // === HELPER: PARSE PERSENTASE KE PIXEL ===
  const parsePct = (valStr, dimension) => {
    if (typeof valStr === 'string' && valStr.includes('%')) {
      return (parseFloat(valStr) / 100) * dimension;
    }
    return parseFloat(valStr) || 0;
  };

  // === HELPER: DATA URL TO BLOB (FIX CHROME IPHONE) ===
  const dataURLtoBlob = (dataurl) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  // === FUNGSI DOWNLOAD MANUAL CANVAS ===
  const handleDownload = async () => {
    setSelectedPhotoIdx(null); 
    setIsSaving(true);

    try {
      // 1. SETUP CANVAS HD
      const scaleFactor = 3; // Resolusi tajam
      const baseWidth = parseFloat(selectedFrame.width || '300'); // Base width visual
      const targetWidth = baseWidth * scaleFactor;
      
      // Hitung tinggi otomatis kalo auto, atau pake tinggi fix
      // Estimasi tinggi buat frame vertical biasa: (TopPad + BottomPad + (PhotoHeight * Count) + (Gap * (Count-1)))
      // Tapi lebih aman pake aspect ratio standar atau ngitung manual nanti
      let targetHeight = parseFloat(selectedFrame.height || '800') * scaleFactor;
      
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // --- LOGIC FRAME CSS (VERTICAL STACK) YANG LEBIH RAPI ---
      let photoW, photoH, startX, startY, gap, padding;

      if (!selectedFrame.isCustomPos) {
        // Definisikan padding & gap persis seperti CSS (dikalikan scaleFactor)
        padding = 20 * scaleFactor; 
        gap = 15 * scaleFactor;
        const textSpace = 60 * scaleFactor; // Space buat tulisan MEMORIA di bawah

        // Lebar foto = Lebar canvas - (padding kiri kanan)
        photoW = targetWidth - (padding * 2);
        // Tinggi foto = Ratio 4:3 standar
        photoH = photoW * 0.75; 
        
        // Hitung ulang tinggi canvas biar pas sama isi konten + gap + text
        // (Hanya jika frame bukan fixed height)
        const totalContentHeight = (padding * 2) + (displayPhotos.length * photoH) + ((displayPhotos.length - 1) * gap) + textSpace;
        
        // Update tinggi canvas
        targetHeight = totalContentHeight;
      }
      
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // 2. BACKGROUND UTAMA
      ctx.fillStyle = selectedFrame.style.backgroundColor || '#ffffff';
      ctx.fillRect(0, 0, targetWidth, targetHeight);

      // 3. LOOPING FOTO & DRAWING
      for (let i = 0; i < displayPhotos.length; i++) {
        const photoSrc = displayPhotos[i];
        const img = await loadImage(photoSrc);
        const adj = photoAdjustments[i] || { zoom: 1, x: 0, y: 0, rotate: 0 };
        
        let x, y, w, h, r = 0;

        if (selectedFrame.isCustomPos && selectedFrame.customPos[i]) {
            // -- MODE CUSTOM POS (FRAME GAMBAR) --
            const pos = selectedFrame.customPos[i];
            x = parsePct(pos.left, targetWidth);
            y = parsePct(pos.top, targetHeight);
            w = parsePct(pos.width, targetWidth);
            h = parsePct(pos.height, targetHeight);
            r = parseFloat(pos.rotate || 0);
        } else {
            // -- MODE CSS STACK (FRAME POLOS) --
            // Posisi X selalu mulai dari padding
            x = padding;
            // Posisi Y = Padding atas + (urutan * (tinggi foto + gap))
            y = padding + (i * (photoH + gap));
            w = photoW;
            h = photoH;
            
            // GAMBAR BORDER PUTIH (Polaroid Effect)
            // Ini biar sama kayak tampilan di layar yang pake border CSS
            if (!selectedFrame.isImageFrame) {
                const borderWidth = 5 * scaleFactor; // 5px border
                ctx.save();
                ctx.fillStyle = '#ffffff';
                // Gambar kotak putih sedikit lebih besar di belakang foto
                ctx.fillRect(x - borderWidth, y - borderWidth, w + (borderWidth*2), h + (borderWidth*2));
                ctx.restore();
            }
        }

        // --- PROSES DRAWING FOTO ---
        ctx.save();
        
        // Pindah titik pusat ke tengah area foto
        const cx = x + w / 2;
        const cy = y + h / 2;
        ctx.translate(cx, cy);
        ctx.rotate((r * Math.PI) / 180);
        
        // Bikin kliping area (kotak foto)
        ctx.beginPath();
        ctx.rect(-w / 2, -h / 2, w, h);
        ctx.clip(); 

        // Apply Transform User (Zoom/Geser)
        // Adjust X/Y user harus diskalakan ke ukuran canvas HD
        const userScaleMult = targetWidth / 320; 
        ctx.translate(adj.x * userScaleMult, adj.y * userScaleMult);
        ctx.scale(adj.zoom, adj.zoom);
        ctx.rotate((adj.rotate * Math.PI) / 180);

        // Object Fit: Cover Logic
        const imgRatio = img.width / img.height;
        const slotRatio = w / h;
        let drawW, drawH;
        
        if (imgRatio > slotRatio) {
            drawH = h;
            drawW = h * imgRatio;
        } else {
            drawW = w;
            drawH = w / imgRatio;
        }
        
        // APPLY FILTER (Safari Friendly)
        if (activeFilter !== 'none') {
            ctx.filter = activeFilter;
        } else {
            ctx.filter = 'none'; // Reset penting!
        }

        ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        
        ctx.restore(); // Reset semua transform & filter
      }

      // 4. OVERLAY FRAME GAMBAR (PNG)
      if (selectedFrame.isImageFrame && selectedFrame.style.backgroundImage) {
        const urlMatch = selectedFrame.style.backgroundImage.match(/url\(["']?([^"']*)["']?\)/);
        if (urlMatch) {
            const frameUrl = urlMatch[1];
            const frameImg = await loadImage(frameUrl);
            ctx.drawImage(frameImg, 0, 0, targetWidth, targetHeight);
        }
      }

      // 5. STICKERS
      // (Optional: Kalau mau sticker ikut kedownload, perlu logic tambahan disini)
      // Saat ini sticker hanya HTML overlay, jadi gak masuk canvas otomatis.

      // 6. TULISAN "MEMORIA" (Kalo Frame CSS)
      if (!selectedFrame.isImageFrame) {
        ctx.save();
        const fontSize = 16 * scaleFactor; // Sesuaikan ukuran font
        ctx.font = `900 ${fontSize}px sans-serif`;
        ctx.fillStyle = selectedFrame.textColor || '#333';
        ctx.textAlign = 'center';
        ctx.letterSpacing = `${2 * scaleFactor}px`; // Tracking
        // Posisi teks di bawah foto terakhir + dikit
        const textY = targetHeight - (25 * scaleFactor); 
        ctx.fillText("MEMORIA", targetWidth / 2, textY);
        ctx.restore();
      }

      // 7. EXPORT & DOWNLOAD (FIX IOS CHROME)
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const blob = dataURLtoBlob(dataUrl); // Convert ke Blob
      const blobUrl = URL.createObjectURL(blob); // Bikin URL lokal

      const link = document.createElement("a");
      link.download = `MEMORIA-${Date.now()}.png`;
      link.href = blobUrl;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      setTimeout(() => { setIsSaving(false); }, 1000);

    } catch (error) {
      console.error("Gagal Manual Render:", error); 
      setIsSaving(false); 
      alert("Gagal menyimpan. Coba refresh browser atau gunakan Safari.");
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
            
            {/* DISPLAY PREVIEW (HTML) */}
            {displayPhotos.map((pic, i) => {
              const pos = selectedFrame.customPos ? selectedFrame.customPos[i] : null;
              const adj = photoAdjustments[i] || { zoom: 1, x: 0, y: 0, rotate: 0 }; 
              const isSelected = selectedPhotoIdx === i;

              const wrapperStyle = pos ? {
                position: 'absolute', top: pos.top, left: pos.left,
                width: pos.width, height: pos.height, 
                transform: `rotate(${pos.rotate || '0deg'})`,
                borderRadius: '2px', overflow: 'hidden', zIndex: 10, cursor: 'pointer',
                border: selectedFrame.isImageFrame ? 'none' : '4px solid white', boxSizing: 'border-box',
                boxShadow: isSelected ? '0 0 0 4px #2196F3' : 'none', 
                filter: activeFilter 
              } : {
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
              <div style={{ overflowY: 'visible', maxHeight: 'none' }}>
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
import React from 'react';
import { frameOptions } from '../data/frames'; 

import { 
  Heart, Star, Sparkles, Music, Cloud, Sun, Moon, 
  Zap, Smile, Flower, Anchor, Camera, Film,
  Coffee, Mail, Rocket, Crown, Leaf, MessageCircle, 
  PenTool, Ruler, Scissors, Gift, MapPin, Eye,
  Flame, Droplet, Fish, Ghost, Skull, 
  Trophy, Medal, Diamond, Gem, Glasses, 
  Watch, Key, Lock, Umbrella, Gamepad2, 
  Headphones, Mic, Speaker, Tv, DollarSign, 
  Utensils, Circle, Disc, Bird, Cat, Dog
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

// Fungsi pembantu buat bersihin angka dari "px"
const parseDim = (val) => {
  if (typeof val === 'number') return val;
  if (typeof val === 'string') return parseInt(val.replace('px', ''), 10);
  return 0;
};

const Frames = ({ selectedCount, onSelectFrame, onBack }) => {
  const availableFrames = frameOptions.filter(f => f.slots === selectedCount);

  // --- RUMUS ANTI GEPENG V2 (LEBIH ROBUST) ---
  const calculatePreviewSize = (frame) => {
    // Pakai parser biar aman mau ada 'px' atau enggak
    const originalW = parseDim(frame.width) || 320; 
    const originalH = parseDim(frame.height) || 580;

    // Lebar preview fix 120px (biar agak lega)
    const targetWidth = 120; 
    
    // Hitung Rasio
    const ratio = targetWidth / originalW;

    // Hitung Tinggi
    const targetHeight = originalH * ratio;

    return {
      width: `${targetWidth}px`,
      height: `${targetHeight}px`,
      ratio: ratio 
    };
  };

  return (
    <div className="selection-container">
      <h1 className="selection-title">PICK YOUR STYLE</h1>
      <div className="selection-subtitle">
        Koleksi Frame Kece untuk {selectedCount} Pose
      </div>
      
      {/* Pastikan grid-nya align-items start biar gak maksa tinggi sama rata 
         Cek file index.css lu, class .frames-grid harusnya:
         display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 20px; align-items: start;
      */}
      <div className="frames-grid" style={{ alignItems: 'start' }}>
        {availableFrames.map((frame) => {
          const pvSize = calculatePreviewSize(frame);

          return (
            <div 
              key={frame.id} 
              className="frame-selection-card" 
              onClick={() => onSelectFrame(frame)}
              style={{ 
                // PENTING: Tinggi kartu AUTO biar bisa melar ke bawah sesuai isi
                height: 'auto', 
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between' 
              }} 
            >
              {/* WRAPPER PREVIEW */}
              <div className="strip-preview-wrapper" style={{ 
                padding: '15px 0', 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                // PENTING: Biar wrapper gak nge-limit tinggi
                height: 'auto',
                minHeight: '50px' 
              }}>
                
                {/* PREVIEW FRAME */}
                <div 
                  className="real-strip-preview"
                  style={{
                    ...frame.style,
                    position: 'relative',
                    
                    // --- PAKSA UKURAN DI SINI ---
                    width: pvSize.width,
                    height: pvSize.height,
                    minWidth: pvSize.width,   // Gak boleh nyusut lebar
                    minHeight: pvSize.height, // Gak boleh nyusut tinggi (ANTI GEPENG)
                    flexShrink: 0,            // JANGAN MAU DISUSUTIN!
                    
                    backgroundSize: '100% 100%', 
                    border: frame.isImageFrame ? 'none' : '2px solid #ddd',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  
                  {/* RENDER STIKER */}
                  {frame.stickers && frame.stickers.map((stk, idx) => {
                     if (stk.isIcon && StickerMap[stk.icon]) {
                       const IconComponent = StickerMap[stk.icon];
                       const { top, left, right, bottom, transform, ...iconOnlyStyle } = stk.style || {};
                       const scaledSize = (stk.size || 24) * pvSize.ratio;
                       return (
                         <div key={`pv-icon-${idx}`} style={{
                           position: 'absolute', top, left, right, bottom, transform, zIndex: 50, pointerEvents: 'none', display:'flex'
                         }}>
                           <IconComponent color={stk.color} fill={stk.fill} size={scaledSize} style={iconOnlyStyle} />
                         </div>
                       );
                     } 
                     return null;
                  })}

                  {/* RENDER SLOT FOTO */}
                  {(() => {
                    if (frame.isCustomPos && frame.customPos) {
                      return frame.customPos.map((pos, i) => (
                        <div 
                          key={i} 
                          style={{
                            position: 'absolute',
                            top: pos.top, 
                            left: pos.left, 
                            width: pos.width, 
                            height: pos.height,
                            transform: `rotate(${pos.rotate || '0deg'})`,
                            zIndex: 10,
                            backgroundColor: 'rgba(0,0,0,0.15)',
                            border: '1px dashed rgba(255,255,255,0.5)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}
                        >
                          <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '0.6rem', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>{(i % frame.slots) + 1}</span>
                        </div>
                      ));
                    } 
                    return Array.from({ length: frame.slots }).map((_, i) => (
                      <div key={i} className="preview-slot-placeholder" style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        height: `${100 / frame.slots - 2}%`, 
                        marginBottom: '2%'
                      }}>
                        <span style={{ color: frame.textColor, opacity: 0.5, fontWeight: 'bold', fontSize: '0.6rem' }}>{i+1}</span>
                      </div>
                    ));
                  })()}
                  
                  {/* BRANDING */}
                  {!frame.isImageFrame && (
                    <div style={{
                      textAlign:'center', fontSize:'0.3rem', fontWeight:'900', marginTop:'2px', 
                      letterSpacing:'1px', color: frame.textColor, width: '100%', position: 'absolute', bottom: '5px'
                    }}>
                      MEMORIA
                    </div>
                  )}
                </div>
              </div>

              {/* INFO FRAME */}
              <div className="frame-info-box" style={{ marginTop: '10px' }}>
                <div className="frame-name" style={{ fontSize: '0.9rem' }}>{frame.name}</div>
                <div className="btn-select-mini">PILIH</div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn-back-home" onClick={onBack}>← KEMBALI</button>
    </div>
  );
};

export default Frames;
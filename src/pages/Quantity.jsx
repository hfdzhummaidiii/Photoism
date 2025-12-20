import React from 'react';

const Quantity = ({ onSelect, onBack }) => {
  // Kita kasih nama biar user tau bedanya
  const options = [
    { count: 2, label: 'CLASSIC' },
    { count: 3, label: 'TIMELINE' },
    { count: 4, label: 'STORY' }
  ];

  return (
    <div className="selection-container">
      {/* Judul lebih singkat biar muat di HP */}
      <h1 className="selection-title">LAYOUT</h1>
      <div className="selection-subtitle">Mau berapa pose?</div>
      
      {/* Grid Pilihan */}
      <div className="frames-grid">
        {options.map((opt) => (
          <div key={opt.count} className="frame-option-card" onClick={() => onSelect(opt.count)}>
            
            {/* VISUALISASI STRIP (Miniatur) */}
            <div className="mini-strip-preview">
              {Array.from({ length: opt.count }).map((_, i) => (
                <div key={i} className="mini-slot" style={{
                  height: `${100 / opt.count}%`, // Bagi rata tingginya
                }}></div>
              ))}
            </div>

            {/* Label Angka & Teks */}
            <div className="frame-meta">
              <span className="big-num">{opt.count}</span>
              <span className="label-text" style={{ fontSize: '0.6rem', opacity: 0.7 }}>{opt.label}</span>
            </div>
            
          </div>
        ))}
      </div>

      <button className="btn-back-home" onClick={onBack}>
        ← KEMBALI
      </button>
    </div>
  );
};

export default Quantity;
export const frameOptions = [

  // ======================================================
  // KATEGORI: 2 FOTO (SCRAPBOOK EDITION - FIXED PATH)
  // ======================================================

  // 1. Classic White (Putih Bersih)
  {
    id: 'clean-2-white', slots: 2, name: 'Classic White', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#ffffff', borderRadius: '0' }
  },

  // 2. Midnight Black (Hitam Elegan)
  {
    id: 'clean-2-black', slots: 2, name: 'Midnight Black', isImageFrame: false, textColor: '#fff',
    style: { backgroundColor: '#1a1a1a', borderRadius: '0' }
  },

  // 3. Soft Peach (Warna Kulit Kalem)
  {
    id: 'clean-2-peach', slots: 2, name: 'Soft Peach', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#ffe5d9', borderRadius: '0' }
  },

  // 4. Matcha Latte (Hijau Kalem)
  {
    id: 'clean-2-matcha', slots: 2, name: 'Matcha Latte', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#d8e2dc', borderRadius: '0' }
  },

  // 5. Cloud Grey (Abu-abu Minimalis)
  {
    id: 'clean-2-grey', slots: 2, name: 'Cloud Grey', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#f8f9fa', borderRadius: '0' }
  },

  // 1. Red School Day (Lubangnya Lonjong ke Atas/Portrait)
  {
    id: 'img-school-2', slots: 2, name: 'School Day', isImageFrame: true, textColor: '#333',
    width: '320px', height: '580px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-1.png")',
      backgroundSize: '100% 100%',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      // Lebar dikecilin dikit, Tinggi digedein (Biar jadi Portrait)
      { top: '27.5%', left: '24%', width: '47%', height: '23%', rotate: '-3deg' },
      { top: '53.5%', left: '26%', width: '48%', height: '23%', rotate: '2deg' }
    ],
    stickers: [] 
  },

  // 2. Blue Ocean (Lubangnya Gede & Miring Ekstrem)
  {
    id: 'img-ocean-2', slots: 2, name: 'Deep Blue', isImageFrame: true, textColor: '#fff',
    width: '400px', height: '725px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-2.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      // Slot atas miring banget ke kanan
      { top: '13%', left: '40%', width: '50%', height: '30%', rotate: '6deg' },
      // Slot bawah miring ke kiri
      { top: '49%', left: '9%', width: '50%', height: '31%', rotate: '-12deg' }
    ]
  },

  // 3. Snoopy Love (Polaroid = Kotak agak lonjong)
  {
    id: 'img-snoopy-2', slots: 2, name: 'Snoopy Love', isImageFrame: true, textColor: '#333',
    width: '400px', height: '725px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-3.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      // Polaroid butuh rasio hampir kotak
      { top: '15%', left: '36%', width: '55%', height: '33%', rotate: '7.7deg' },
      { top: '50%', left: '8%', width: '53%', height: '33%', rotate: '-5.5deg' }
    ]
  },

  // 4. Vintage News (Kertas sobek = Abstrak)
  {
    id: 'img-news-2', slots: 2, name: 'Vintage News', isImageFrame: true, textColor: '#333',
    width: '400px', height: '725px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-4.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      { top: '12%', left: '8%', width: '55%', height: '33%', rotate: '-2deg' },
      { top: '56%', left: '28%', width: '55%', height: '33%', rotate: '1deg' }
    ]
  },

  // 5. Cherry Kiss (Mirip buku terbuka)
  {
    id: 'img-lips-2', slots: 2, name: 'Cherry Kiss', isImageFrame: true, textColor: '#333',
    width: '400px', height: '720px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-5.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      // Persegi panjang tidur (Landscape)
      { top: '22%', left: '21%', width: '60%', height: '28%', rotate: '2deg' },
      { top: '52%', left: '17%', width: '60%', height: '28%', rotate: '3deg' }
    ]
  },

  // 6. Cozy Knit (Polaroid Landscape Lebar)
  {
    id: 'img-knit-2', slots: 2, name: 'Cozy Knit', isImageFrame: true, textColor: '#fff',
    width: '320px', height: '580px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-6.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      // Landscape Lebar
      { top: '24%', left: '18%', width: '70%', height: '23%', rotate: '0deg' },
      { top: '58%', left: '18%', width: '70%', height: '23%', rotate: '0deg' }
    ]
  },

  // 7. Winter Flower (Sama kayak no 6)
  {
    id: 'img-flower-2', slots: 2, name: 'Winter Flower', isImageFrame: true, textColor: '#333',
    width: '320px', height: '580px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-7.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      { top: '20%', left: '19.5%', width: '70%', height: '26%', rotate: '0deg' },
      { top: '54%', left: '19.5%', width: '70%', height: '26%', rotate: '0deg' }
    ]
  },

  // 8. Blue Jazz (Landscape)
  {
    id: 'img-music-2', slots: 2, name: 'Blue Jazz', isImageFrame: true, textColor: '#333',
    width: '320px', height: '580px',
    style: {
      backgroundImage: 'url("/images/frames/2slot-8.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    isCustomPos: true,
    customPos: [
      { top: '24%', left: '17%', width: '58%', height: '24%', rotate: '0deg' },
      { top: '56%', left: '17%', width: '58%', height: '24%', rotate: '0deg' }
    ]
  },

  // --- 1. SPONGEBOB (KUNING BUBBLE) ---
  {
    id: 'toon-spongebob-2', slots: 2, name: 'Sponge Yellow', isImageFrame: false, textColor: '#5D4037',
    style: { 
      backgroundColor: '#FFF59D', 
      // Motif lubang sponge pake radial gradient
      backgroundImage: 'radial-gradient(#FDD835 20%, transparent 20%), radial-gradient(#FBC02D 20%, transparent 20%)',
      backgroundPosition: '0 0, 10px 10px',
      backgroundSize: '30px 30px',
      border: '8px solid #795548', 
      borderRadius: '15px', padding: '20px', position: 'relative' 
    },
    stickers: [
      { isIcon: true, icon: 'smile', color: '#5D4037', fill: 'white', size: 60, style: { top: '-30px', left: '-30px', transform: 'rotate(-15deg)' } },
      { isIcon: true, icon: 'fish', color: '#0277BD', fill: '#B3E5FC', size: 40, style: { bottom: '50%', right: '-20px', transform: 'rotate(45deg)' } },
      { isIcon: true, icon: 'water', color: '#4FC3F7', fill: 'white', size: 30, style: { top: '20px', right: '-10px' } }, // Bubble 1
      { isIcon: true, icon: 'circle', color: '#fff', fill: 'rgba(255,255,255,0.5)', size: 20, style: { bottom: '20px', left: '10px' } } // Bubble 2
    ]
  },

  // --- 2. PATRICK (PINK PATTERN) ---
  {
    id: 'toon-patrick-2', slots: 2, name: 'Star Pink', isImageFrame: false, textColor: '#C2185B',
    style: { 
      backgroundColor: '#F8BBD0', 
      // Motif celana patrick (bunga ungu)
      backgroundImage: 'radial-gradient(#BA68C8 15%, transparent 16%)', 
      backgroundSize: '40px 40px',
      border: '8px solid #66BB6A', // Ijo celana
      borderRadius: '25px', padding: '20px', position: 'relative' 
    },
    stickers: [
      { isIcon: true, icon: 'star', color: '#C2185B', fill: '#FF80AB', size: 65, style: { top: '-25px', right: '-25px', transform: 'rotate(20deg)' } },
      { isIcon: true, icon: 'flower', color: '#7B1FA2', fill: '#E1BEE7', size: 45, style: { bottom: '-15px', left: '-15px' } },
      { isIcon: true, icon: 'food', color: '#880E4F', size: 35, style: { top: '45%', left: '-25px', transform: 'rotate(-10deg)' } } // Krabby patty
    ]
  },

  // --- 3. PIKACHU (LISTRIK) ---
  {
    id: 'toon-pikachu-2', slots: 2, name: 'Pika Pika', isImageFrame: false, textColor: '#F57F17',
    style: { 
      background: 'linear-gradient(135deg, #FFEB3B 0%, #FBC02D 100%)', 
      border: '6px solid #212121', padding: '20px', position: 'relative',
      boxShadow: '0 0 15px #FFEB3B'
    },
    stickers: [
      { isIcon: true, icon: 'zap', color: '#D50000', fill: 'red', size: 40, style: { top: '-20px', right: '-15px', transform: 'rotate(15deg)' } }, 
      { isIcon: true, icon: 'zap', color: '#F57F17', fill: 'yellow', size: 60, style: { bottom: '-30px', left: '50%', transform: 'translateX(-50%)' } },
      { isIcon: true, icon: 'circle', color: '#D50000', fill: 'red', size: 25, style: { top: '50%', left: '-12px' } }, // Pipi
      { isIcon: true, icon: 'circle', color: '#D50000', fill: 'red', size: 25, style: { top: '50%', right: '-12px' } } // Pipi
    ]
  },

  // --- 4. PICNIC (KOTAK-KOTAK MERAH) ---
  {
    id: 'css-picnic', slots: 2, name: 'Picnic Day', isImageFrame: false, textColor: '#C62828',
    style: { 
      backgroundColor: 'white', 
      // Motif taplak meja
      backgroundImage: `linear-gradient(45deg, #FFCDD2 25%, transparent 25%, transparent 75%, #FFCDD2 75%, #FFCDD2), 
                        linear-gradient(45deg, #FFCDD2 25%, transparent 25%, transparent 75%, #FFCDD2 75%, #FFCDD2)`,
      backgroundPosition: '0 0, 10px 10px',
      backgroundSize: '20px 20px',
      border: '8px solid #C62828', borderRadius: '10px', padding: '20px', position: 'relative'
    },
    stickers: [
      { isIcon: true, icon: 'heart', color: '#D32F2F', fill: '#FFEBEE', size: 55, style: { top: '-25px', left: '-20px', transform: 'rotate(-15deg)' } },
      { isIcon: true, icon: 'food', color: '#D32F2F', fill: 'white', size: 40, style: { bottom: '-15px', right: '-15px' } },
      { isIcon: true, icon: 'sun', color: '#FF9800', fill: 'orange', size: 35, style: { top: '45%', right: '-20px' } }
    ]
  },

  // --- 5. NEON CYBER (HITAM GRID) ---
  {
    id: 'css-neon', slots: 2, name: 'Cyberpunk', isImageFrame: false, textColor: '#00E676',
    style: { 
      backgroundColor: '#000', 
      // Motif Grid Hijau
      backgroundImage: 'linear-gradient(#003300 1px, transparent 1px), linear-gradient(90deg, #003300 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      border: '4px solid #00E676', boxShadow: '0 0 15px #00E676', padding: '20px', position: 'relative'
    },
    stickers: [
      { isIcon: true, icon: 'game', color: '#00E676', fill: 'black', size: 45, style: { top: '-25px', right: '-15px', transform: 'rotate(15deg)' } },
      { isIcon: true, icon: 'zap', color: '#FFFF00', fill: 'white', size: 35, style: { bottom: '50%', left: '-20px' } },
      { isIcon: true, icon: 'skull', color: '#00E676', size: 40, style: { bottom: '-20px', left: '-10px' } }
    ]
  },

  // --- 6. LAVENDER (UNGU SOFT) ---
  {
    id: 'css-lavender', slots: 2, name: 'Soft Purple', isImageFrame: false, textColor: '#7B1FA2',
    style: { 
      background: 'linear-gradient(to bottom right, #F3E5F5, #E1BEE7)', 
      border: '6px dashed #AB47BC', borderRadius: '25px', padding: '20px', position: 'relative' 
    },
    stickers: [
      { isIcon: true, icon: 'flower', color: '#8E24AA', fill: '#F3E5F5', size: 50, style: { top: '0', left: '0' } },
      { isIcon: true, icon: 'heart', color: '#AB47BC', fill: 'white', size: 35, style: { bottom: '10px', right: '10px' } },
      { isIcon: true, icon: 'sparkles', color: '#9C27B0', size: 30, style: { top: '50%', right: '5px' } }
    ]
  },

  // --- 7. WIDE VISION (MELEBAR) ---
  {
    id: 'css-wide-2', slots: 2, name: 'Wide Vision', isImageFrame: false, textColor: '#000',
    isCustomPos: true, width: '400px', height: '260px', 
    style: { backgroundColor: '#fff', border: '10px solid #000', padding: '0', position: 'relative' },
    customPos: [{ top: '10%', left: '3%', width: '45%', height: '80%', rotate: '0deg' }, { top: '10%', left: '52%', width: '45%', height: '80%', rotate: '0deg' }],
    stickers: [
      { isIcon: true, icon: 'camera', color: '#000', size: 40, style: { bottom: '5px', left: '50%', transform: 'translateX(-50%)' } },
      { isIcon: true, icon: 'film', color: '#333', size: 30, style: { top: '-15px', right: '10px', transform: 'rotate(15deg)' } }
    ]
  },

  // ======================================================
  // KATEGORI: 3 FOTO (TOTAL 15 FRAME)
  // ======================================================

  // 1. Creamy Beige (Warna Kopi Susu)
  {
    id: 'clean-3-cream', slots: 3, name: 'Creamy Beige', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#f5ebe0', borderRadius: '0' }
  },

  // 2. Navy Blue (Biru Donker)
  {
    id: 'clean-3-navy', slots: 3, name: 'Navy Blue', isImageFrame: false, textColor: '#fff',
    style: { backgroundColor: '#14213d', borderRadius: '0' }
  },

  // 3. Baby Blue (Biru Langit)
  {
    id: 'clean-3-sky', slots: 3, name: 'Baby Blue', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#e0fbfc', borderRadius: '0' }
  },

  // 4. Lavender Haze (Ungu Muda)
  {
    id: 'clean-3-lavender', slots: 3, name: 'Lavender Haze', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#e7c6ff', borderRadius: '0' }
  },

  // 5. Warm Sunset (Gradasi Halus)
  {
    id: 'clean-3-sunset', slots: 3, name: 'Warm Sunset', isImageFrame: false, textColor: '#fff',
    style: { 
      background: 'linear-gradient(to bottom, #ffb5a7, #fcd5ce)',
      borderRadius: '0' 
    }
  },

  // 1. Vinyl Record (Hitam Putih)
  {
    id: 'img-vinyl-3', slots: 3, name: 'Classic Vinyl', isImageFrame: true, textColor: '#fff',
    width: '400px', height: '725px',
    style: {
      backgroundImage: 'url("/images/frames/3slot-1.png")',
      backgroundSize: '100% 100%',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Atas (Miring dikit)
      { top: '12%', left: '26%', width: '45%', height: '22%', rotate: '-2deg' },
      // Tengah (Miring Kanan)
      { top: '38%', left: '42%', width: '46%', height: '23%', rotate: '14deg' },
      // Bawah (Miring Kiri dikit)
      { top: '65%', left: '30%', width: '45%', height: '22%', rotate: '-3deg' }
    ],
    stickers: []
  },

  // 2. Black Cat & Moon (Kucing)
  {
    id: 'img-cat-3', slots: 3, name: 'Midnight Cat', isImageFrame: true, textColor: '#333',
    width: '400px', height: '725px',
    style: {
      backgroundImage: 'url("/images/frames/3slot-2.png")',
      backgroundSize: '100% 100%',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Atas (Polaroid Miring Kiri)
      { top: '18%', left: '12%', width: '38%', height: '25%', rotate: '-6deg' },
      // Tengah (Gede Miring Kanan)
      { top: '35%', left: '45%', width: '45%', height: '26%', rotate: '3deg' },
      // Bawah (Kecil Miring Kiri)
      { top: '63.5%', left: '28%', width: '40%', height: '22%', rotate: '16deg' }
    ]
  },

  // 3. Retro Groovy Purple (Ungu Bergelombang)
  {
    id: 'img-groovy-3', slots: 3, name: 'Groovy Purple', isImageFrame: true, textColor: '#333',
    width: '380px', height: '850px',
    style: {
      backgroundImage: 'url("/images/frames/3slot-3.png")',
      backgroundSize: '100% 100%',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Frame ini cukup lurus, cuma kotaknya gede-gede
      { top: '8%', left: '17%', width: '66%', height: '26%', rotate: '0deg' },
      { top: '37%', left: '17%', width: '66%', height: '26%', rotate: '0deg' },
      { top: '66%', left: '17%', width: '66%', height: '26%', rotate: '0deg' }
    ]
  },

  // 4. Film Strip (Hitam Bolong 3) - Rename file "3(2).png" jadi "3slot-4.png"
  {
    id: 'img-film-3', slots: 3, name: 'Cinema Strip', isImageFrame: true, textColor: '#fff',
    width: '400px', height: '850px',
    style: {
      backgroundImage: 'url("/images/frames/3(2).png")', // <-- Pake PNG ini
      backgroundSize: '100% 100%',
      backgroundColor: 'white', // Atau item
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Kotak landscape lurus
      { top: '4%', left: '12%', width: '76%', height: '28%', rotate: '0deg' },
      { top: '35.5%', left: '12%', width: '76%', height: '28%', rotate: '0deg' },
      { top: '67%', left: '12%', width: '76%', height: '28%', rotate: '0deg' }
    ]
  },

  // 5. Pink Bows (Lingkaran Pink)
  {
    id: 'img-bows-3', slots: 3, name: 'Pink Ribbon', isImageFrame: true, textColor: '#333',
    width: '400px', height: '850px',
    style: {
      backgroundImage: 'url("/images/frames/3slot-5.png")',
      backgroundSize: '100% 100%',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Lingkaran sebenernya kotak yg dikasih radius, tapi kita pasin kotaknya aja
      { top: '5%', left: '12%', width: '75%', height: '26%', rotate: '0deg' },
      { top: '34%', left: '12%', width: '75%', height: '26%', rotate: '0deg' },
      { top: '62%', left: '12%', width: '75%', height: '26%', rotate: '0deg' }
    ]
  },

  // 6. Blue Sky Clouds (Awan Biru)
  {
    id: 'img-cloud-3', slots: 3, name: 'Happy Cloud', isImageFrame: true, textColor: '#333',
    width: '400px', height: '725px',
    style: {
      backgroundImage: 'url("/images/frames/3slot-6.png")',
      backgroundSize: '100% 100%',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Mirip yg pink, bunder-bunder
      { top: '5%', left: '12%', width: '75%', height: '24%', rotate: '0deg' },
      { top: '30.5%', left: '13%', width: '77%', height: '30%', rotate: '0deg' },
      { top: '64%', left: '11%', width: '75%', height: '24%', rotate: '0deg' }
    ]
  },

  // 7. Blue Doodles (Biru Polaroid Miring)
  {
    id: 'img-doodle-3', slots: 3, name: 'Blue Doodles', isImageFrame: true, textColor: '#fff',
    width: '400px', height: '725px',
    style: {
      backgroundImage: 'url("/images/frames/3slot-7.png")',
      backgroundSize: '100% 100%',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Atas Miring Kanan
      { top: '3%', left: '20%', width: '55%', height: '25%', rotate: '-8deg' },
      // Tengah Lurus
      { top: '35%', left: '21%', width: '55%', height: '25%', rotate: '8deg' },
      // Bawah Miring Kiri
      { top: '68%', left: '21%', width: '55%', height: '25%', rotate: '-8deg' }
    ]
  },

  // --- 8. SQUIDWARD (TELUR ASIN) ---
  {
    id: 'toon-squidward-3', slots: 3, name: 'Artistic Squid', isImageFrame: false, textColor: '#004D40',
    style: { 
      backgroundColor: '#B2DFDB', 
      backgroundImage: 'repeating-linear-gradient(45deg, #80CBC4 0, #80CBC4 2px, transparent 2px, transparent 10px)', // Garis halus
      border: '8px solid #00695C', borderRadius: '5px', padding: '20px', position: 'relative' 
    },
    stickers: [
      { isIcon: true, icon: 'music', color: '#004D40', size: 50, style: { top: '-25px', right: '-15px', transform: 'rotate(10deg)' } },
      { isIcon: true, icon: 'pen', color: '#00695C', size: 35, style: { bottom: '50%', left: '-15px' } },
      { isIcon: true, icon: 'smile', color: '#004D40', fill: '#E0F2F1', size: 40, style: { bottom: '10px', right: '-10px' } }
    ]
  },

  // --- 9. CHARMANDER (API) ---
  {
    id: 'toon-charmander-3', slots: 3, name: 'Fire Lizard', isImageFrame: false, textColor: '#E65100',
    style: { 
      background: 'linear-gradient(to bottom, #FFCC80, #FFAB91)', 
      border: '6px solid #E65100', borderRadius: '20px', padding: '20px', position: 'relative',
      boxShadow: 'inset 0 0 20px #FF7043'
    },
    stickers: [
      { isIcon: true, icon: 'flame', color: '#FF3D00', fill: 'orange', size: 55, style: { top: '-25px', right: '-20px' } },
      { isIcon: true, icon: 'flame', color: '#FF6F00', fill: 'yellow', size: 35, style: { bottom: '10px', left: '-10px' } },
      { isIcon: true, icon: 'sun', color: '#FF3D00', size: 30, style: { top: '40%', left: '-10px' } }
    ]
  },

  // --- 10. ANDY'S ROOM (CLOUD) ---
  {
    id: 'toon-andy-3', slots: 3, name: 'Toy Room', isImageFrame: false, textColor: '#1565C0',
    style: { 
      backgroundColor: '#42A5F5', 
      // Motif awan ikonik pake radial gradient
      backgroundImage: 'radial-gradient(circle at 50% 50%, white 20%, transparent 25%)',
      backgroundSize: '50px 50px',
      border: '8px solid white', padding: '20px', borderRadius: '15px', position: 'relative'
    },
    stickers: [
      { isIcon: true, icon: 'star', color: '#FFD700', fill: 'orange', size: 50, style: { top: '-25px', left: '-20px' } }, // Sheriff Star
      { isIcon: true, icon: 'rocket', color: 'white', fill: 'red', size: 40, style: { bottom: '-20px', right: '-15px' } }
    ]
  },

  // --- 11. MR. KRABS (MONEY) ---
  {
    id: 'toon-krabs-3', slots: 3, name: 'Mr. Krabs', isImageFrame: false, textColor: '#B71C1C',
    style: { 
      backgroundColor: '#FFEBEE', 
      backgroundImage: 'linear-gradient(#EF9A9A 1px, transparent 1px), linear-gradient(90deg, #EF9A9A 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      border: '6px solid #B71C1C', borderBottom: '15px solid #0D47A1', padding: '20px', position: 'relative'
    },
    stickers: [
      { isIcon: true, icon: 'money', color: '#2E7D32', fill: '#C8E6C9', size: 55, style: { top: '-30px', left: '50%', transform: 'translateX(-50%)' } },
      { isIcon: true, icon: 'anchor', color: '#0D47A1', size: 30, style: { bottom: '5px', right: '5px' } },
      { isIcon: true, icon: 'gem', color: '#2E7D32', size: 30, style: { top: '20%', left: '-15px' } }
    ]
  },

  // --- 12. COQUETTE (PITA) ---
  {
    id: 'css-coquette', slots: 3, name: 'Soft Bow', isImageFrame: false, textColor: '#EC407A',
    style: { 
      backgroundColor: '#FCE4EC', 
      border: '3px solid #F8BBD0', borderRadius: '50px', padding: '30px 20px', 
      boxShadow: 'inset 0 0 15px #F48FB1', position: 'relative'
    },
    stickers: [
      { isIcon: true, icon: 'heart', color: '#EC407A', fill: '#F8BBD0', size: 50, style: { top: '5px', left: '50%', transform: 'translateX(-50%)' } },
      { isIcon: true, icon: 'sparkles', color: '#EC407A', fill: 'white', size: 35, style: { bottom: '20px', right: '20px' } },
      { isIcon: true, icon: 'star', color: '#EC407A', fill: 'transparent', size: 25, style: { top: '35%', left: '15px' } }
    ]
  },

  // ======================================================
  // KATEGORI: 4 FOTO (TOTAL 15 FRAME)
  // ======================================================

  // 1. Charcoal Matte (Abu Tua)
  {
    id: 'clean-4-charcoal', slots: 4, name: 'Charcoal Matte', isImageFrame: false, textColor: '#fff',
    style: { backgroundColor: '#343a40', borderRadius: '0' }
  },

  // 2. Sakura Pink (Pink Jepang)
  {
    id: 'clean-4-sakura', slots: 4, name: 'Sakura Pink', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#ffcfd2', borderRadius: '0' }
  },

  // 3. Lemonade (Kuning Pastel)
  {
    id: 'clean-4-lemon', slots: 4, name: 'Lemonade', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#fdfcdc', borderRadius: '0' }
  },

  // 4. Vintage Brown (Coklat Klasik)
  {
    id: 'clean-4-brown', slots: 4, name: 'Vintage Brown', isImageFrame: false, textColor: '#fff',
    style: { backgroundColor: '#6f4e37', borderRadius: '0' }
  },

  // 5. Minty Fresh (Hijau Mint)
  {
    id: 'clean-4-mint', slots: 4, name: 'Minty Fresh', isImageFrame: false, textColor: '#333',
    style: { backgroundColor: '#cbf3f0', borderRadius: '0' }
  },

// 1. Beautiful Day (Hitam Hati - 4(1).jpg)
  {
    id: 'frame-4-hearts', slots: 4, name: 'Beautiful Day', isImageFrame: true, textColor: '#fff',
    width: '400px', height: '1150px',
    style: {
      backgroundImage: 'url("/images/frames/4(1).png")', // Rename file 4(1).jpg jadi ini
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      { top: '6%', left: '17%', width: '66%', height: '19%', rotate: '0deg' }, // Kotak Atas
      { top: '25%', left: '12%', width: '76%', height: '19%', rotate: '0deg' }, // Awan 1
      { top: '45%', left: '17%', width: '66%', height: '19%', rotate: '0deg' }, // Kotak Bawah
      { top: '63%', left: '12%', width: '76%', height: '21%', rotate: '0deg' }  // Awan 2
    ]
  },

  // 2. Orange Retro (4(3).png)
  {
    id: 'frame-4-retro', slots: 4, name: 'Good Vibes', isImageFrame: true, textColor: '#333',
    width: '400px', height: '1150px',
    style: {
      backgroundImage: 'url("/images/frames/4(3).png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      { top: '3.5%', left: '6%', width: '88%', height: '20%', rotate: '0deg' },
      { top: '23%', left: '6%', width: '88%', height: '20%', rotate: '0deg' },
      { top: '43%', left: '6%', width: '88%', height: '20%', rotate: '0deg' },
      { top: '63%', left: '6%', width: '88%', height: '20%', rotate: '0deg' }
    ]
  },

  // 3. Tilted Film (4(4).png)
  {
    id: 'frame-4-tilted', slots: 4, name: 'Tilted Film', isImageFrame: true, textColor: '#333',
    width: '400px', height: '1150px',
    style: {
      backgroundImage: 'url("/images/frames/4(4).png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      { top: '10%', left: '31.5%', width: '40%', height: '18%', rotate: '0deg' },
      { top: '30%', left: '30.5%', width: '40%', height: '18%', rotate: '4deg' },
      { top: '50%', left: '31%', width: '40%', height: '18%', rotate: '-1.5deg' },
      { top: '70.5%', left: '30%', width: '40%', height: '19%', rotate: '0deg' }
    ]
  },

  // 4. Birthday Party (4(5).jpg)
  {
    id: 'frame-4-birthday', slots: 4, name: 'Birthday Party', isImageFrame: true, textColor: '#333',
    width: '400px', height: '1150px',
    style: {
      backgroundImage: 'url("/images/frames/4(5).png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      { top: '8%',  left: '13%', width: '73%', height: '17%', rotate: '0deg' }, // Oval Atas
      { top: '25%', left: '13%', width: '73%', height: '17%', rotate: '0deg' }, // Wavy
      { top: '43%', left: '13%', width: '73%', height: '17%', rotate: '0deg' }, // Oval Bawah
      { top: '60%', left: '13%', width: '73%', height: '17%', rotate: '0deg' }  // Wavy
    ]
  },

  // 6. Green Picnic (4(7).jpg)
  {
    id: 'frame-4-green', slots: 4, name: 'Green Picnic', isImageFrame: true, textColor: '#333',
    width: '400px', height: '1150px',
    style: {
      backgroundImage: 'url("/images/frames/4(7).png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      { top: '11%', left: '18%', width: '50%', height: '17%', rotate: '0deg' }, // Polaroid Atas
      { top: '42%', left: '47%', width: '41%', height: '15%', rotate: '0deg' }, // Strip 1
      { top: '58%', left: '47%', width: '41%', height: '15%', rotate: '0deg' }, // Strip 2
      { top: '74%', left: '47%', width: '41%', height: '15%', rotate: '0deg' }  // Strip 3
    ]
  },

  // 7. Brown Film (4(8).jpg)
  {
    id: 'frame-4-brown', slots: 4, name: 'Vintage Film', isImageFrame: true, textColor: '#fff',
    width: '400px', height: '1150px',
    style: {
      backgroundImage: 'url("/images/frames/4(8).png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      // Strip ada di sebelah KIRI
      { top: '10%', left: '11%', width: '44%', height: '18%', rotate: '0deg' },
      { top: '31%', left: '11%', width: '44%', height: '18%', rotate: '0deg' },
      { top: '51%', left: '11%', width: '44%', height: '18%', rotate: '0deg' },
      { top: '71.5%', left: '11%', width: '44%', height: '18%', rotate: '0deg' }
    ]
  },

  // 9. Pop Art (4slot-10.jpg)
  {
    id: 'frame-4-pop', slots: 4, name: 'Pop Art Love', isImageFrame: true, textColor: '#333',
    width: '400px', height: '1150px',
    style: {
      backgroundImage: 'url("/images/frames/4slot-10.png")',
      backgroundSize: '100% 100%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px'
    },
    isCustomPos: true,
    customPos: [
      { top: '11%', left: '19%', width: '62%', height: '13%', rotate: '0deg' }, // Pink
      { top: '29%', left: '19%', width: '62%', height: '13%', rotate: '0deg' }, // Kuning
      { top: '49%', left: '19%', width: '62%', height: '13%', rotate: '0deg' }, // Merah
      { top: '67%', left: '20%', width: '60%', height: '13%', rotate: '0deg' }  // Hijau
    ]
  },

  // --- 13. PLANKTON (HIJAU JAHAT) ---
  {
    id: 'toon-plankton-4', slots: 4, name: 'Chum Bucket', isImageFrame: false, textColor: '#004D40',
    style: { 
      backgroundColor: '#00C853', 
      backgroundImage: 'repeating-linear-gradient(45deg, #00E676, #00E676 10px, #00C853 10px, #00C853 20px)', // Garis miring
      border: '6px solid #1B5E20', borderRadius: '5px', padding: '20px', position: 'relative'
    },
    stickers: [
      { isIcon: true, icon: 'eye', color: '#D50000', fill: 'yellow', size: 60, style: { top: '-30px', left: '50%', transform: 'translateX(-50%)' } },
      { isIcon: true, icon: 'game', color: '#263238', fill: 'white', size: 35, style: { bottom: '10px', right: '-15px' } }, // Remote
      { isIcon: true, icon: 'zap', color: '#FFD600', fill: 'white', size: 30, style: { top: '20px', left: '-10px' } }
    ]
  },

  // --- 14. POKEBALL (MERAH PUTIH) ---
  {
    id: 'toon-pokeball-4', slots: 4, name: 'Poke Ball', isImageFrame: false, textColor: '#D50000',
    style: { 
      background: 'linear-gradient(to bottom, #D50000 50%, #fff 50%)', 
      border: '10px solid #212121', padding: '25px', position: 'relative' 
    },
    stickers: [
      { isIcon: true, icon: 'circle', color: '#212121', fill: 'white', size: 70, style: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100 } }, // Tengah
      { isIcon: true, icon: 'star', color: '#FFD600', fill: 'white', size: 30, style: { top: '10px', left: '10px' } },
      { isIcon: true, icon: 'zap', color: '#212121', size: 30, style: { bottom: '10px', right: '10px' } }
    ]
  },

  // --- 15. GALAXY (SPACE) ---
  {
    id: 'css-galaxy', slots: 4, name: 'Galaxy Space', isImageFrame: false, textColor: '#B39DDB',
    style: { 
      background: 'linear-gradient(to bottom, #1A237E, #4A148C, #311B92)', 
      border: '4px solid rgba(255,255,255,0.3)', borderRadius: '15px', padding: '20px', 
      boxShadow: '0 0 20px rgba(123, 31, 162, 0.5)', position: 'relative'
    },
    stickers: [
      { isIcon: true, icon: 'rocket', color: '#B39DDB', fill: 'white', size: 50, style: { top: '-25px', right: '-20px', transform: 'rotate(45deg)' } },
      { isIcon: true, icon: 'star', color: '#FFD700', fill: 'white', size: 35, style: { bottom: '20px', left: '-15px' } },
      { isIcon: true, icon: 'moon', color: '#E1BEE7', fill: '#B39DDB', size: 40, style: { top: '30%', left: '-20px' } }
    ]
  },

  // --- 16. SKA VIBE (CATUR) ---
  {
    id: 'css-check-4', slots: 4, name: 'Ska Checker', isImageFrame: false, textColor: '#000',
    isCustomPos: true, width: '350px', height: '480px',
    style: { 
      backgroundColor: '#fff', 
      backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)', 
      backgroundSize: '30px 30px', 
      border: '8px solid black', position: 'relative'
    },
    customPos: [
      { top: '8%', left: '10%', width: '35%', height: '25%', rotate: '0deg' },
      { top: '28%', left: '50%', width: '35%', height: '25%', rotate: '0deg' },
      { top: '53%', left: '10%', width: '35%', height: '25%', rotate: '0deg' },
      { top: '73%', left: '50%', width: '35%', height: '25%', rotate: '0deg' }
    ],
    stickers: [
      { isIcon: true, icon: 'zap', color: 'red', fill: 'yellow', size: 50, style: { top: '15px', right: '15px', transform: 'rotate(20deg)' } },
      { isIcon: true, icon: 'music', color: 'white', fill: 'black', size: 40, style: { bottom: '20px', left: '15px' } }
    ]
  }
];
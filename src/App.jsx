import React, { useState } from "react";
import "./App.css";

// Import Components & Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quantity from "./pages/Quantity";
import Frames from "./pages/Frames";
import Camera from "./pages/Camera";
import Result from "./pages/Result";

const App = () => {
  // --- STATE ---
  const [step, setStep] = useState('home'); // home | quantity | frames | camera | result
  const [selectedCount, setSelectedCount] = useState(3);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [photos, setPhotos] = useState([]); 
  
  // State khusus buat Retake (Nyimpen nomor foto yang mau diganti)
  const [retakeIndex, setRetakeIndex] = useState(null);

  // --- LOGIC NAVIGASI ---
  const goHome = () => {
    setStep('home');
    setPhotos([]);
    setSelectedFrame(null);
    setRetakeIndex(null);
  };

  const handleQuantitySelect = (num) => {
    setSelectedCount(num);
    setStep('frames');
  };

  const handleFrameSelect = (frame) => {
    setSelectedFrame(frame);
    setPhotos([]); // Reset foto
    setRetakeIndex(null);
    setStep('camera');
  };

  // --- LOGIC RETAKE SATU FOTO ---
  const handleRetakeSingle = (idx) => {
    console.log("Mau Retake Foto Nomor:", idx); // Debugging
    setRetakeIndex(idx); 
    setStep('camera');   
  };

  // --- LOGIC RETAKE SEMUA (ULANG DARI NOL) ---
  const handleRetakeAll = () => {
    setPhotos([]);
    setRetakeIndex(null);
    setStep('camera');
  };

  // --- LOGIC SAAT FOTO TERTANGKAP (PENTING!) ---
  const handleCapture = (newPhotos) => {
    if (retakeIndex !== null) {
      // === MODE RETAKE (GANTI 1 FOTO) ===
      // newPhotos[0] adalah foto baru dari kamera
      const updatedPhotos = [...photos];
      updatedPhotos[retakeIndex] = newPhotos[0]; 
      
      setPhotos(updatedPhotos);
      setRetakeIndex(null); // Reset mode retake
      setStep('result');    // Balik ke result
    } else {
      // === MODE NORMAL (FOTO BARU) ===
      setPhotos(newPhotos);
      setStep('result');
    }
  };

  return (
    <div className="container">
      <Navbar goHome={goHome} />

      {step === 'home' && (
        <Home onStart={() => setStep('quantity')} />
      )}

      {step === 'quantity' && (
        <Quantity onSelect={handleQuantitySelect} onBack={goHome} />
      )}

      {step === 'frames' && (
        <Frames 
          selectedCount={selectedCount} 
          onSelectFrame={handleFrameSelect} 
          onBack={() => setStep('quantity')} 
        />
      )}

      {step === 'camera' && (
        <Camera 
          selectedFrame={selectedFrame} 
          // PENTING: Kirim targetCount biar kamera tau butuh berapa foto
          // Kalau retakeIndex ada isinya, berarti butuh 1. Kalau gak, butuh sesuai slot.
          targetCount={retakeIndex !== null ? 1 : (selectedFrame.duplicate ? selectedFrame.slots / 2 : selectedFrame.slots)}
          
          // PENTING: Pake fungsi handleCapture yang udah kita bikin logic-nya di atas
          onCapture={handleCapture}
          
          onBack={() => retakeIndex !== null ? setStep('result') : setStep('frames')} 
        />
      )}

      {step === 'result' && (
        <Result 
          photos={photos} 
          selectedFrame={selectedFrame} 
          onRetake={handleRetakeAll} // Ulangi Semua
          onRetakeSingle={handleRetakeSingle} // Ulangi Satu (INI YANG TADI KETINGGALAN)
          onFinish={goHome} 
        />
      )}
    </div>
  );
};

export default App;
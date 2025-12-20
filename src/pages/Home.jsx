import React from 'react';

const Home = ({ onStart }) => {
  const sampleStrip = [
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=360",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?w=360",
    "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=360"
  ];

  return (
    <div className="geo-content">
      {/* PANEL ATAS (MOBILE) / KIRI (DESKTOP) */}
      <div className="left-panel">
        <div className="deco-circle"></div>
        <div className="deco-rect"></div>
        <div className="photostrip-container">
          <div className="photo-strip-card">
            <div className="push-pin"></div>
            {sampleStrip.map((url, i) => (
              <img key={i} src={url} className="strip-img" alt="sample" />
            ))}
            <div style={{textAlign:'center', fontWeight:'900', fontSize:'0.8rem', color:'var(--geo-navy)', marginTop: '5px'}}>
              MEMORIA
            </div>
          </div>
        </div>
      </div>

      {/* PANEL BAWAH (MOBILE) / KANAN (DESKTOP) */}
      <div className="right-panel">
        <h1 className="title-big">CAPTURE<br/><span className="outline-text">YOUR ART</span></h1>
        <div className="subtitle-badge">The Next Gen Photobooth</div>
        <p className="desc-text">
          Abadikan momen lo dengan gaya yang beda. Simple, Artistik, dan langsung jadi kenangan.
        </p>
        
        <button 
          className="btn-start" 
          onClick={() => {
            console.log("Start Session Clicked");
            onStart();
          }}
        >
          START SESSION →
        </button>
      </div>
    </div>
  );
};

export default Home;
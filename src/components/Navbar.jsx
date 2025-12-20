import React from 'react';

const Navbar = ({ goHome }) => {
  return (
    <div className="geo-header">
      <div className="geo-logo">
        <div className="geo-logo-icon"></div>
        MEMORIA.
      </div>
      <div className="geo-nav">
        <span onClick={goHome}>Home</span>
        <span>Gallery</span>
        <span className="btn-login">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
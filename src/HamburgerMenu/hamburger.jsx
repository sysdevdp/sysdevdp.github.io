import React, { useState } from 'react';
import './hamburger.css'; 
const HamburgerMenu = ({ onPlayWordle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="hamburger-menu-container">
      <button
        className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
        <div
          className="dropdown-item"
          onClick={() => {
            onPlayWordle();
            setMenuOpen(false);
          }}
        >
          Play Wordle
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

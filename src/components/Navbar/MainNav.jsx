import React, { useState } from 'react';
import './MainNav.css';

export default function MainNav() {
  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <div className="mainnav">
        <div className="logo">
          <h2>Business Logo</h2>
        </div>
        <div className={`mainmenu ${menuOpen ? 'open' : ''}`}>
          {}
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu-toggle" onClick={handleMenuToggle}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>
      </div>
    </>
  );
}

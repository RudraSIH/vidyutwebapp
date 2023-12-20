import React from 'react';
import './Header.css';

const Header = () => {
  const menuItems = [
    "Acts & Rules",
    "Generation",
    "Transmission",
    "Distribution",
    "Revamped Distribution Scheme",
    "Energy Conservation & Energy Transition",
    "Research & Training",
    "Dashboards/Portals",
    "ETWG G20"
  ];

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src="./ministry.png" alt="logo" className="image-first" />
        <img src="./azadi.jpg" alt="center logo" className="image-center" />
        <img src="./swach-bharat.png" alt="end logo" className="image-end" />
      </div>
      <div className="menu-bar">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">{item}</div>
        ))}
      </div>
    </section>
  );
};

export default Header;

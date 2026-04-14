import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-car-side"></i>
          <span>VELOCITY</span>
        </div>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a onClick={() => scrollToSection('cars')}>Models</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <div className="nav-icon">
          <i className="fas fa-bolt"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
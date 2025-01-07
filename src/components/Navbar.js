import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registeration');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link-item">Home</Link></li>
          {/* <li><Link to="/about" className="nav-link-item">About</Link></li> */}
          <li><Link to="/courses" className="nav-link-item">Courses</Link></li>
          <li><Link to="/prices" className="nav-link-item">Prices</Link></li>
          <li><Link to="/testimonials" className="nav-link-item">Testimonials</Link></li>
          <button className="nav-button" onClick={handleRegisterClick}>Register Now</button>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
      </nav>

      {/* Mobile Menu */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>&times;</div>
        <ul style={{ listStyleType: 'none', padding: 0, marginTop:'50px' }}>
          <li className="menu-item"><Link to="/" className="nav-link-item">Home</Link></li>
          {/* <li className="menu-item"><Link to="/about" className="nav-link-item">About</Link></li> */}
          <li className="menu-item"><Link to="/courses" className="nav-link-item">Courses</Link></li>
          <li className="menu-item"><Link to="/prices" className="nav-link-item">Prices</Link></li>
          <li className="menu-item"><Link to="/testimonials" className="nav-link-item">Testimonials</Link></li>
          <li className="menu-item">
            <button className="nav-button" onClick={handleRegisterClick}>Register Now</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

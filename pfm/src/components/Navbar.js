import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '10px 50px',
    backgroundColor: '#343A40',
    color: '#fff',
    position: 'fixed',
    width:'100%',
    top: 0,
    right: 0
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '20px',
    listStyleType: 'none',
    margin: 0
  };

  const navLinkItemStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px'
  };

  return (
    <nav style={navbarStyle}>
      <ul style={navLinksStyle}>
        <li><Link to="/" style={navLinkItemStyle}>Home</Link></li>
        {/* <li><Link to="/about" style={navLinkItemStyle}>About</Link></li> */}
        <li><Link to="/courses" style={navLinkItemStyle}>Courses</Link></li>
        <li><Link to="/prices" style={navLinkItemStyle}>Prices</Link></li>
        <li><Link to="/testimonials" style={navLinkItemStyle}>Testimonials</Link></li>
        {/* <li><Link to="/contact" style={navLinkItemStyle}>Contact</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

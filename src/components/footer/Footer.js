import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop:'10px'}}>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Passion For Music</h2>
          <p>
            Join our online music classes to explore your passion for music. 
            Learn from skilled teachers in a flexible and supportive environment.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/courses" >Courses</Link></li>
            <li><Link to="/prices" >Prices</Link></li>
            <li><Link to="/testimonials" >Testimonials</Link></li>
            <li><Link to="/registeration" >Register Now</Link></li>
            <li><Link to="/faq" >FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:passionformusic2020@gmail.com" target='_blank' style={{color:'white'}}>passionformusic2020@gmail.com</a></p>
          <p>Phone: +91 8299236211</p>
          <div className="socials">
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Passion For Music | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

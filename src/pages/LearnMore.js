import React, { useState } from 'react';
import '../pagesStyles/LearnMore.css';
import thirdImage from '../images/childRegister.webp'
import secondImage from '../images/childLearn.webp'
import firstImage from '../images/childPractiseAlone.webp'
import forthImage from '../images/clearningDoubts.jpeg'
import fifthImage from '../images/childPlayInfront.jpeg'
import { Navigate, useNavigate } from 'react-router-dom';

const LearnMore = () => {

    
    const navigate = useNavigate();
    const handleStart = () => {
      navigate('/registeration');
      };

      const [isHovered, setIsHovered] = useState(false);

      const handleHover = () => {
          setIsHovered(true);
      };
  
      const handleLeave = () => {
          setIsHovered(false);
      };
  
      const buttonStyle = {
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: isHovered ? '#FF8F00' : '#FF6F00', // Changes color on hover
          color: 'white',
          border: 'none',
          borderRadius: '50px', // Rounded corners
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarges on hover
      };
  const steps = [
    {
      caption: "Step 1: Register on Passion For Music",
      imgSrc: firstImage, 
    },
    {
      caption: "Step 2: One-on-One Practice with a Mentor",
      imgSrc: secondImage, 
    },
    {
      caption: "Step 3: Practice on Your Own",
      imgSrc: thirdImage, 
    },
    {
      caption: "Step 4: Clear Your Doubts and Refine Skills",
      imgSrc: forthImage,
    },
    {
      caption: "Step 5: Practice More",
      imgSrc: thirdImage, 
    },
    {
      caption: "Step 6: Perform and Shine in Front of an Audience",
      imgSrc: fifthImage,
    },
  ];

  return (
    <div className="journey-container">
      <h2 className="journey-title">Your Journey to Becoming a Rockstar</h2>
      <div className="journey-steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <img src={step.imgSrc} alt={step.caption} className="step-image" />
            <p className="step-caption">{step.caption}</p>
            {index < steps.length - 1 && <div className="arrow">⬇️</div>}
            {/* ➡️ */}
          </div>
        ))}
      </div>
      <button
            style={buttonStyle}
            onClick={handleStart}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            Start Your Journey
        </button>
    </div>
  );
};

export default LearnMore;

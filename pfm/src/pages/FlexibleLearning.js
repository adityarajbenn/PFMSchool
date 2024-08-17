import React from 'react';
// import sideImage from '../images/your-image.jpg'; // Replace with your actual image path
import { FaClock, FaVideo, FaMobileAlt } from 'react-icons/fa'; // Using Font Awesome for icons
import { BsCameraVideo } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import sideImage from '../images/musicNotes.jpg'

function FlexibleLearning() {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
    backgroundColor: '#F8F9FA', // Light background color
    color: '#325F7B',
    width:'60%',
    margin: 'auto'
  };

  const contentStyle = {
    width:'50%'
  };

  const headerStyle = {
    fontSize: '2.5rem',
    color: '#325F7B',
    marginBottom: '30px',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  };

  const iconStyle = {
    fontSize: '2rem',
    color: '#325F7B',
    marginRight: '20px',
  };
  

  const imageContainerStyle = {
    width:'30%',
    textAlign: 'center',
    height: '610px',
    marginLeft: '10px' 
  };

  const imageStyle = {
    width: '100%',
    height:'100%',
    borderRadius: '8px',
    objectFit: 'cover',
    // maxHeight: '500px',
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={headerStyle}>Flexible Learning Experience</h2>
        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <FiClock style={iconStyle} />
            <div>
              <h3>Flexible Schedule</h3>
              <p>Learn on your own time, from anywhere.</p>
            </div>
          </div>
          <div style={cardStyle}>
            <BsCameraVideo style={iconStyle} />
            <div>
              <h3>Interactive Lessons</h3>
              <p>Engage with instructors and classmates through live and on-demand classes.</p>
            </div>
          </div>
          <div style={cardStyle}>
            <FaMobileAlt style={iconStyle} />
            <div>
              <h3>Any Device</h3>
              <p>Access your lessons on your computer, tablet, or smartphone.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <img src={sideImage}  alt="Learning Experience" style={imageStyle} />
      </div>
    </section>
  );
}

export default FlexibleLearning;

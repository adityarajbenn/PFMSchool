import React, { useReducer } from 'react';
import NavbarBanner from '../images/NavbarBanner.jpg';
import NavbarBanner01 from '../images/NavbarImage01.jpg';
import MobileBanner from '../images/bannerMobile.jpg';
import WhyLearn from './WhyLearn';
import FlexibleLearning from './FlexibleLearning';
import ReviewCard from '../components/reviewCard/ReviewCard';
import { useNavigate } from 'react-router-dom';
import useResponsive from '../components/customHook/useResponsive';

function Home() {
  const isMobile = useResponsive();
    const navigate = useNavigate();
    const handleRegisterClick = () => {
      navigate('/registeration');
      };
      const handleLearnMore = () => {
        navigate('/learnMore');
        };
          
  const heroSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${isMobile? MobileBanner : NavbarBanner01})`,
    backgroundSize: 'cover',
    color: '#fff',
    textAlign: 'center',
    padding: '0 20px'
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px'
  };

  const buttonSecondaryStyle = {
    ...buttonStyle,
    backgroundColor: '#343A40'
  };

  const reviewSectionStyle = {
    textAlign: 'center',
    color: 'grey',
    backgroundColor:'white',
    borderRadius:'5px',
    padding:'20px',
    height:'70px',
    position: 'fixed',
    top: '50px',
    right: '5px'
  };

  const starStyle = {
    color: '#FFD700',
    fontSize: '24px'
  };

  return (
    <>
      <div style={heroSectionStyle}>
        <h1>Discover Your Passion for Music</h1>
        <p>Learn Ukulele and Guitar with Expert Mentors from Anywhere.</p>
        <button style={buttonStyle} onClick={handleRegisterClick}>Register Now</button>
        <button style={buttonSecondaryStyle} onClick={handleLearnMore}>Learn More</button>
        {!isMobile && <div style={reviewSectionStyle}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',
    height: '13px'}}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google Logo"
            style={{ width: '30px', height: '30px',marginRight:'10px' }} // Adjust size as needed
        />
        <h2>Google Review</h2>
        </div>
        <p style={{height:'5px' }}>Rating: 4.9</p>
        <div>
            <span style={starStyle}>&#9733;</span>
            <span style={starStyle}>&#9733;</span>
            <span style={starStyle}>&#9733;</span>
            <span style={starStyle}>&#9733;</span>
            <span style={starStyle}>&#9733;</span>
        </div>
        </div>}
      </div>
      <WhyLearn />
      <FlexibleLearning/>
        <ReviewCard profilePic={'profilePic'} name={'name'} reviewText={'reviewText'} rating={5}/>
    </>
  );
}

export default Home;

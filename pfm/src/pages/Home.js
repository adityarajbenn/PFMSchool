import React from 'react';
import NavbarBanner from '../images/NavbarBanner.jpg';
import WhyLearn from './WhyLearn';
import FlexibleLearning from './FlexibleLearning';
import ReviewCard from '../components/reviewCard/ReviewCard';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
const handleRegisterClick = () => {
    navigate('/registeration');
    };
  const heroSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px',
    backgroundImage: `url(${NavbarBanner})`,
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
    marginTop: '20px'
  };

  const starStyle = {
    color: '#FFD700',
    fontSize: '24px'
  };

  return (
    <>
      <div style={heroSectionStyle}>
        <h1>Passion For Music: Online Music Classes</h1>
        <p>Discover your musical talents with our expert-led online ukulele and guitar classes. Get started today!</p>
        <button style={buttonStyle} onClick={handleRegisterClick}>Register Now</button>
        <button style={buttonSecondaryStyle}>Learn More</button>
        <div style={reviewSectionStyle}>
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
        </div>
      </div>
      <WhyLearn />
      <FlexibleLearning/>
        <ReviewCard profilePic={'profilePic'} name={'name'} reviewText={'reviewText'} rating={5}/>
    </>
  );
}

export default Home;

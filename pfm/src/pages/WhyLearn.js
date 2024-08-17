import React from 'react';

function WhyLearn() {
  const sectionStyle = {
    backgroundColor: '#F8F9FA',
    padding: '50px 20px',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#343A40',
    marginBottom: '20px'
  };

  const featuresContainerStyle = {
    gridTemplateColumns: 'repeat(3, 1fr)',
    display: 'grid',
    gap: '20px',
    margin: 'auto',
    width: '70%'
  };

  const featureStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'left',
    margin:'auto',
  };

  const numberStyle = {
    fontSize: '2rem',
    color: '#007BFF',
    marginBottom: '10px'
  };

  const featureTitleStyle = {
    fontSize: '1.5rem',
    color: '#343A40',
    marginBottom: '10px'
  };

  const featureTextStyle = {
    fontSize: '1rem',
    color: '#6C757D'
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Why Learn with Passion For Music?</h2>
      <div style={featuresContainerStyle}>
        <div style={featureStyle}>
          <div style={numberStyle}>1</div>
          <h3 style={featureTitleStyle}>Experienced Instructors</h3>
          <p style={featureTextStyle}>Our teachers are passionate musicians with years of teaching experience. Over 300+ students taught with a 4.9 rating on Google.</p>
        </div>
        <div style={featureStyle}>
          <div style={numberStyle}>2</div>
          <h3 style={featureTitleStyle}>Personalized Approach</h3>
          <p style={featureTextStyle}>We tailor our lessons to your learning style and musical goals, offering one-on-one live classes with flexible scheduling.</p>
        </div>
        <div style={featureStyle}>
          <div style={numberStyle}>3</div>
          <h3 style={featureTitleStyle}>Supportive Community</h3>
          <p style={featureTextStyle}>Connect with fellow music enthusiasts, share your progress, and become part of a thriving community of learners.</p>
        </div>
        <div style={featureStyle}>
          <div style={numberStyle}>4</div>
          <h3 style={featureTitleStyle}>Choose Your Own Slots</h3>
          <p style={featureTextStyle}>We offer the flexibility to choose your own class times, so learning fits seamlessly into your busy schedule.</p>
        </div>
        <div style={featureStyle}>
          <div style={numberStyle}>5</div>
          <h3 style={featureTitleStyle}>Engaging Curriculum</h3>
          <p style={featureTextStyle}>Our curriculum is designed to keep you motivated and engaged, with a variety of musical styles and techniques to explore.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyLearn;

import React, { useState } from 'react';
import './RegisterNow.css';
import { countryCodes } from './countryCodes.js';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../../images/Loading.gif'

const RegisterNow = () => {
  const [loading, setLoading] = useState('false');
  const [instrument, setInstrument] = useState('');
  const [classType, setClassType] = useState('');
  const [levelType, setLevelType] = useState('');
  const [classFrequency, setClassFrequency] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Default to India's country code
  const [contactNumber, setContactNumber] = useState('');
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const newErrors = {};
    if (!instrument) newErrors.instrument = 'This field is required';
    if (!classType) newErrors.classType = 'This field is required';
    if (
      (classType !== 'One Class') &&
      !classFrequency
    ) {
      newErrors.classFrequency = 'This field is required';
    }
    if (!name) newErrors.name = 'This field is required';
    if (!levelType) newErrors.levelType = 'This field is required';
    if (!selectedDate) newErrors.selectedDate = 'This field is required';
    if (!email) {
      newErrors.email = 'This field is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!contactNumber) newErrors.contactNumber = 'This field is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission logic
      sendEmail();
      // console.log({
      //   instrument,
      //   classType,
      //   classFrequency,
      //   name,
      //   levelType,
      //   selectedDate,
      //   email,
      //   contactNumber,
      //   countryCode,
      // });
    }
  };

  const sendEmail = async () => {
    const serviceID = process.env.REACT_APP_USER_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_SERVICE_ID;

    const templateParams = {
      instrument,
      classType,
      classFrequency,
      name,
      levelType,
      selectedDate,
      email,
      contactNumber: `${countryCode} ${contactNumber}`,
      to_email: 'rajbennaditya@gmail.com', // The recipient's email
    };

   try {
    await emailjs.send(serviceID, templateID, templateParams, userId)
     setTimeout(() => {
          setLoading(false);
          navigate('/registeration/thank-you'); // Redirect to Thank You page
        }, 1500);
      } catch (error) {
        console.error('Submission failed', error);
        setLoading(false);
        alert('Failed to submit. Please try again later.');
      }
  };

  const handleDateClick = () => {
    document.getElementById('date-input').showPicker();
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 2);

  const minDateString = tomorrow.toISOString().split('T')[0];
  const maxDateString = maxDate.toISOString().split('T')[0];

  const pricingStyle = {
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

  return (
    <div className="register-now">
     {loading === 'true' && (
  <div 
    className="loading-screen" 
    style={{
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional: to dim the background
      zIndex: 9999
    }}
  >
    <img 
      src={loadingGif} 
      alt="Loading..." 
      style={{ width: '100px', height: '100px', marginBottom: '10px' }} // Adjust size as needed
    />
    <h2 style={{ color: 'white' }}>Submitting...</h2>
  </div>
)}
        <>
      {/* {((classFrequency && classType !== 'One Class') || (classType === 'One Class')) && <div style={pricingStyle}>
        Show the price
      </div>} */}
      <h2>Register Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Instrument:</label>
          <select
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
            required
          >
            <option value="">--Select--</option>
            <option value="Ukulele">Ukulele</option>
            <option value="Guitar">Guitar</option>
          </select>
          {errors.instrument && (
            <span className="error-text">{errors.instrument}</span>
          )}
        </div>

        <div className="form-group">
          <label>Select Class Type:</label>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            required
          >
            <option value="">--Select--</option>
            <option value="One Class">One Class</option>
            <option value="1 Month Classes">1 Month Classes</option>
            <option value="3 Months Classes">3 Months Classes</option>
            <option value="5 Months Classes">5 Months Classes</option>
          </select>
          {errors.classType && (
            <span className="error-text">{errors.classType}</span>
          )}
        </div>

        {(classType === '1 Month Classes' || classType === '3 Months Classes') && (
          <div className="form-group">
            <label>Class Frequency:</label>
            <select
              value={classFrequency}
              onChange={(e) => setClassFrequency(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              <option value="2 Classes a Week">2 Classes a Week</option>
              <option value="3 Classes a Week">3 Classes a Week</option>
            </select>
            {errors.classFrequency && (
              <span className="error-text">{errors.classFrequency}</span>
            )}
          </div>
        )}

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Level:</label>
          <select
            value={levelType}
            onChange={(e) => setLevelType(e.target.value)}
            required
          >
            <option value="">--Select--</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          {errors.levelType && (
            <span className="error-text">{errors.levelType}</span>
          )}
        </div>

        <div className="form-group" onClick={handleDateClick} style={{ cursor: 'pointer' }}>
          <label>Select Class Date:</label>
          <input
            type="date"
            id="date-input"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={minDateString}
            max={maxDateString}
            required
            style={{ display: 'block', width: '30%', background: 'transparent' }}
          />
          {errors.selectedDate && (
            <span className="error-text">{errors.selectedDate}</span>
          )}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Contact Number/WhatsApp:</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{
                marginRight: '8px',
                padding: '8px',
                borderRadius: '4px',
                width: '30%',
              }}
              required
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} {country.code}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter your contact number"
              required
              style={{ flex: 1, padding: '8px', borderRadius: '4px' }}
            />
          </div>
          {errors.contactNumber && (
            <span className="error-text">{errors.contactNumber}</span>
          )}
        </div>

        <button type="submit" className="register-btn">
          Submit
        </button>
      </form>
      </>
    </div>
  );
};

export default RegisterNow;

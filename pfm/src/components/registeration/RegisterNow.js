import React, { useState } from 'react';
import './RegisterNow.css';
import PhoneInput from 'react-phone-input-2';
import {countryCodes} from './countryCodes.js'

const RegisterNow = () => {
  const [instrument, setInstrument] = useState('');
  const [classType, setClassType] = useState('');
  const [levelType, setLevelType] = useState('');
  const [classFrequency, setClassFrequency] = useState('');
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Default to India's country code
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      instrument,
      classType,
      classFrequency,
      name,
      level,
      selectedDate,
      email,
      contact,
    });
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


  return (
    <div className="register-now">
      <h2>Register Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Instrument:</label>
          <select value={instrument} onChange={(e) => setInstrument(e.target.value)} required>
            <option value="">--Select--</option>
            <option value="Ukulele">Ukulele</option>
            <option value="Guitar">Guitar</option>
            {/* Add more instruments if needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Select Class Type:</label>
          <select value={classType} onChange={(e) => setClassType(e.target.value)} required>
            <option value="">--Select--</option>
            <option value="One Class">One Class</option>
            <option value="1 Month Classes">1 Month Classes</option>
            <option value="3 Months Classes">3 Months Classes</option>
          </select>
        </div>

        {(classType === '1 Month Classes' || classType === '3 Months Classes') && (
          <div className="form-group">
            <label>Class Frequency:</label>
            <select value={classFrequency} onChange={(e) => setClassFrequency(e.target.value)} required>
              <option value="">--Select--</option>
              <option value="2 Classes a Week">2 Classes a Week</option>
              <option value="3 Classes a Week">3 Classes a Week</option>
            </select>
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
        </div>

        <div className="form-group">
          <label>Level:</label>
          <select value={levelType} onChange={(e) => setLevelType(e.target.value)} required>
            <option value="">--Select--</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group" onClick={handleDateClick} style={{ cursor: 'pointer' }}>
        <label>Select Class Date:</label>
        <input
          type="date"
          id="date-input"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={minDateString} // Tomorrow's date
          max={maxDateString} // Two months from today
          required
          style={{ display: 'block', width: '30%', background: 'transparent' }}
        />
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
        </div>

        <div className="form-group">
        <label>Contact Number/WhatsApp:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Country Code Selector */}
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            style={{ marginRight: '8px', padding: '8px', borderRadius: '4px',width:'30%' }}
            required
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} {country.code}
              </option>
            ))}
          </select>

          {/* Phone Number Input */}
          <input
            type="number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your contact number"
            required
            style={{ flex: 1, padding: '8px', borderRadius: '4px' }}
          />
        </div>
      </div>

        <button type="submit" className="register-btn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterNow;

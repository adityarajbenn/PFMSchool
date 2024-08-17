import React from 'react';
import './PricingComponent.css'; // Make sure to create and use this CSS file

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-table">
        <div className="pricing-card">
          <h3>1 Class</h3>
          <p className="price">€30</p>
          <p>Single Class</p>
        </div>
        
        <div className="pricing-card">
          <h3>1 Month Plan</h3>
          <p className="price">€200</p>
          <p>2 Classes a Week (8 Classes)</p>
          <p className="price">€240</p>
          <p>3 Classes a Week (12 Classes)</p>
        </div>

        <div className="pricing-card">
          <h3>3 Months Plan</h3>
          <p className="price">€480</p>
          <p>2 Classes a Week (24 Classes)</p>
          <p className="price">€600</p>
          <p>3 Classes a Week (36 Classes)</p>
        </div>

        <div className="pricing-card">
          <h3>5 Months Plan</h3>
          <p className="price">€600</p>
          <p>2 Classes a Week (40 Classes)</p>
          <p className="price">€720</p>
          <p>3 Classes a Week (60 Classes)</p>
        </div>
      </div>
      
      <div className="best-plan">
        <h3>Best Plan for Beginners</h3>
        <p>We recommend the 3 Months Plan with 3 Classes a Week (36 Classes). It offers the best value and is ideal for total beginners.</p>
      </div>
    </div>
  );
};

export default PricingComponent;

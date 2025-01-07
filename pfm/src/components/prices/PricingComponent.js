import React from 'react';
import './PricingComponent.css'; // Make sure to create and use this CSS file

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-table">
        <div className="pricing-card">
          <h3>Per Class</h3>
          <p className="price">500₹</p>
          <p>Single Class</p>
        </div>
        
        <div className="pricing-card">
          <h3>1 Month Plan</h3>
          <p className="price">2,500₹</p>
          <p>2 Classes a Week (8 Classes)</p>
          <p className="price">3,500₹</p>
          <p>3 Classes a Week (12 Classes)</p>
        </div>

        <div className="pricing-card">
          <h3>3 Months Plan</h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
            <p className="discount" style={{ color: "red", marginRight: '10px' }}>15% Off</p>
            <p className="price">6,350₹</p>
          </div>
          <p className="original-price" style={{ fontSize: "small", color: "grey", margin: '0px' }}>
            Original Price: <s>7,500₹</s>
          </p>
          <p>2 Classes a Week (24 Classes)</p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
            <p className="discount" style={{ color: "red", marginRight: '10px' }}>15% Off</p>
            <p className="price">8,900₹</p>
          </div>
          <p className="original-price" style={{ fontSize: "small", color: "grey", margin: '0px' }}>
            Original Price: <s>10,500₹</s>
          </p>
          <p>3 Classes a Week (36 Classes)</p>
        </div>

        <div className="pricing-card">
          <h3>5 Months Plan</h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
            <p className="discount" style={{ color: "red", marginRight: '10px' }}>25% Off</p>
            <p className="price">9,350₹</p>
          </div>
          <p className="original-price" style={{ fontSize: "small", color: "grey", margin: '0px' }}>
            Original Price: <s>12,500₹</s>
          </p>
          <p>2 Classes a Week (40 Classes)</p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
            <p className="discount" style={{ color: "red", marginRight: '10px' }}>25% Off</p>
            <p className="price">13,100₹</p>
          </div>
          <p className="original-price" style={{ fontSize: "small", color: "grey", margin: '0px' }}>
            Original Price: <s>17,500₹</s>
          </p>
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

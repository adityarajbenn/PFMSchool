import React from 'react';
import './ReviewCard.css'; // Import your stylesheet here
import { useLocation } from 'react-router-dom';

const ReviewCard = ({ profilePic, name, reviewText, rating }) => {
  // Generate star icons based on the rating
  const stars = Array(5).fill(0).map((_, i) => (
    <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
  ));

  return (
    <div className="review-card">
      <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
      <div style={{display:'flex'}}>
      <div className="profile-pic">
        <img src={profilePic} alt="Profile" />
      </div>
      <div>
      <h3 className="name">{name}</h3>
      <div className="rating">
          {stars}
        </div>
      </div>
      </div>
        <div className="google-icon">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google Logo"
            style={{ width: '20px', height: '20px',marginRight:'10px' }} // Adjust size as needed
        />
        </div>
      </div>
      <div className="review-content">
        <p className="review">{reviewText}</p>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  const stars = Array(5).fill(0).map((_, i) => (
    <span key={i} className={`star ${i < 5 ? 'filled' : ''}`}>★</span>
  ));

  const location = useLocation();
  const isTestimonialsPage = location.pathname.includes('testimonials');
  // Example review data
  const reviews = [
    { profilePic: 'https://lh3.googleusercontent.com/a/ACg8ocJT4mbTGzVxrnUM77UsliQeIRLO5sehC_EAzzl8t8nQZkB6jQ=s40-c-rp-mo-br100', name: 'Soo Raj', reviewText: 'Anisha is such a great musician and instructor. I can grasp everything she explains. Lessons are interesting and I really enjoy them. Hard topics become easy. She has been excellent! Calm, patient, flexible and does not make me feel like a complete chimp when I can’t do something; instead she encourages and understands. She is always upbeat and friendly and her sense of humour means that I genuinely look forward to lessons with her. I recommend everyone to take up music lessons with her. :)', rating: 5 },
    { profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjWtckyn-jbADUwb08DCSre_CK8aFmw-eZAfsgepZVk0fQCDY2G1=s40-c-rp-mo-br100', name: 'Anshuman Singh', reviewText: 'This music school is the best platform for people who want to learn music and want to learn as a profession. They have the best facilities provided that too in such a affordable fees. The musician here is very motivating and talented and teaches very well to students to make it easy to understand.', rating: 5 },
    { profilePic: 'https://lh3.googleusercontent.com/a/ACg8ocJ5FRW_70EaMdPElYAWU9IO1CHRgQh00vFN2CerGhQ8_llh1g=s40-c-rp-mo-br100', name: 'Satya Chachaundiya', reviewText: 'Just wow! Loved each and every session of my class. I was just amazed to know and learn so much about Guitar. All thanks to Passion For Music and Anisha mam.', rating: 5 },
    {
      profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjW3dTdLs3t8Oe6U3phsn8A0iyp6MafqtOSGuUrWaYEn25bvN-s_=s40-c-rp-mo-ba2-br100',
      name: 'Aman Agarwal',
      reviewText: `*MANAGEMENT-  5⭐
  
      *LESSONS-     5⭐
      
      *FLEXIBILITY -   4.8⭐ (no sudden changes, have to inform 1-2 days earlier)
      
      *TEACHER- 5⭐ (Very polite and skillful)
      
      Made My Ukulele learning experience the best.
      I was very satisfied.`,
          rating: 5,
    },
    { profilePic: 'https://lh3.googleusercontent.com/a-/ALV-UjUwL_HL9xXtDTkagyU_CjbbKD152-v8Iz3wGPLswtiLtNATYv_S3g=s40-c-rp-mo-br100', name: 'tarun tiwari', reviewText: 'Was trying to find a solution to get my ukulele/guitar hobby but YouTube was not enough. Than I found out PFM which helped me a lot in getting polishing my hobby into Passion.', rating: 5 },
  ];

  return (
    <div className="review-section" style={{width:'70%',margin:'auto'}}>
      <div className="overall-rating" >
        <h2 style={{display:'flex',justifyContent:'center',fontSize:'50px'}}>{isTestimonialsPage? 'Testimonials' : 'Our Customers'}</h2>
        <p style={{margin:'0px'}}>Reviews</p>
        <p className="rating-value" style={{margin:'0px'}}>4.9{stars}</p>
      </div>
      <div className="review-cards" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',margin:'auto',marginTop:'20px'}}>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            profilePic={review.profilePic}
            name={review.name}
            reviewText={review.reviewText}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;

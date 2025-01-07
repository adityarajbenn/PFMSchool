import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const faqs = [
    { question: "How long are the classes?", answer: "Each class lasts for 30 minutes." },
    { question: "Is there a female mentor available for girl students?", answer: "Yes, we provide female mentors for girl students to ensure a comfortable learning experience." },
    { question: "What do I need to start?", answer: "You only need Guitar/Ukulele a mobile and laptop and just internet connection."},
    { question: "Can I reschedule a class if needed?", answer: "Yes, rescheduling is allowed. For a 1-month plan: 1 reschedule per month is permitted (inform at least 3 hours in advance). For a 3-month plan: 5 reschedules allowed. For a 5-month plan: 8 reschedules allowed." },
    { question: "Is there a demo class available?", answer: "We do not offer a demo class. However, you can book a single class to try out the experience." },
    { question: "Will I get the discounted price if I book again?", answer: "The discounted price is a one-time offer and will not be applicable for subsequent bookings." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Open or close the clicked FAQ
  };

  return (
    <div className="faq-container" style={{ padding: '20px', maxWidth: '600px', margin: '50px auto', minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Frequently Asked Questions</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {faqs.map((faq, index) => (
          <li
            key={index}
            style={{
              borderBottom: '1px solid #ddd',
              marginBottom: '10px',
              paddingBottom: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => toggleFAQ(index)}
            >
              <p style={{ margin: '0', fontWeight: 'bold' }}>{faq.question}</p>
              <span style={{ fontSize: '1.5rem' }}>
                {openIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {openIndex === index && (
              <p style={{ marginTop: '10px', color: '#555' }}>{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

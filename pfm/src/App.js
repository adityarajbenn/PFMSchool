import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import CoursesSection from './pages/CoursesSection';
import ReviewSection from './components/reviewCard/ReviewCard';
import RegisterNow from './components/registeration/RegisterNow';
import ScrollToTop from './scrollToTop';
import PricingComponent from './components/prices/PricingComponent';
import './App.css'
// import About from './pages/About';
// import Courses from './pages/Courses';
// import Testimonials from './pages/Testimonials';
// import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
    <Router>
      <ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/courses" element={<CoursesSection />} />
        <Route path="/testimonials" element={<ReviewSection />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/prices" element={<PricingComponent />} />
        <Route path="/registeration" element={<RegisterNow />} />
      </Routes>
      <Footer/>
      </ScrollToTop>
    </Router>
    </div>
  );
}

export default App;

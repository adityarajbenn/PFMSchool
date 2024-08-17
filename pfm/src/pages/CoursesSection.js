import React from 'react';
import '../pagesStyles/CoursesSection.css';

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2 className="section-title">Our Courses</h2>
      
      <div className="course-card">
        <h3 className="course-title">Ukulele Course</h3>
        <p className="course-description">
          Discover the joy of playing the Ukulele with our comprehensive course. Whether you're a beginner or looking to refine your skills, this course covers everything you need to know.
        </p>
        <ul className="course-topics">
          <li>Introduction to Ukulele</li>
          <li>Basic Chords and Strumming Patterns</li>
          <li>Playing Popular Songs</li>
          <li>Advanced Techniques: Fingerpicking and Chord Progressions</li>
          <li>Performance Skills and Songwriting</li>
        </ul>
      </div>
      
      <div className="course-card">
        <h3 className="course-title">Guitar Course</h3>
        <p className="course-description">
          Our Guitar course is designed for all skill levels, from beginners to advanced players. Learn everything from basic chords to advanced solo techniques.
        </p>
        <ul className="course-topics">
          <li>Introduction to Guitar</li>
          <li>Essential Chords and Strumming</li>
          <li>Playing Popular Songs</li>
          <li>Lead Guitar Techniques: Scales and Soloing</li>
          <li>Music Theory and Improvisation</li>
        </ul>
      </div>
    </section>
  );
};

export default CoursesSection;

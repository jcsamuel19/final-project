import React from 'react';

// Define the data for courses, websites, books, and clubs
const resources = {
  courses: [
    "Intro to Programming",
    "Intro to Programming Fundamentals",
    "Computer Ethics"
  ],
  websites: [
    "chatgpt.com",
    "codecademy.com",
    "neetcode.com"
  ],
  books: [
    "Dont Give Up!",
    "You Don't Know How to Code? So What!",
    "How to Not Disappoint Your Professor"
  ],
  clubs: [
    "I Can't Code Club",
    "Internship Trainers",
    "Technology Club"
  ]
};

// The Freshman component
export const Freshman = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Freshman . . . Welcome to Your FIRST YEAR!!!!</h1>
    </div>
  );
}

// Main component that includes Freshman and additional resources
const MainComponent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Image at the top of the page */}
      <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Welcome_Freshman.jpg" alt="Top Banner" style={{ width: '50%', height: 'auto' }} />

      <Freshman />
      <div className="resources">
        <h2>Courses to Take</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.courses.map(course => <li key={course}>{course}</li>)}
        </ul>

        <h2>Websites to Use</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.websites.map(site => <li key={site}>{site}</li>)}
        </ul>

        <h2>Books to Read</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.books.map(book => <li key={book}>{book}</li>)}
        </ul>

        <h2>Clubs/Extracurriculars</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {resources.clubs.map(club => <li key={club}>{club}</li>)}
        </ul>
      </div>

      {/* Image at the bottom of the page */}
      <img src="https://zfcphp.arizona.edu/sites/default/files/images/nsy.png" alt="Bottom Banner" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
}

export default MainComponent;

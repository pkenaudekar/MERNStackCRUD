import React from 'react';
import CourseList from './courses/CourseList';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>List of Courses</h3>
      <div>
        <CourseList />
      </div>
    </div>
  );
};

export default Landing;

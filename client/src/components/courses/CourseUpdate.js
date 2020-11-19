import React from 'react';
import CourseUpdateList from './CourseUpdateList';

const CourseUpdate = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Modify or Delete Courses</h3>
      <div>
        <CourseUpdateList />
      </div>
    </div>
  );
};

export default CourseUpdate;

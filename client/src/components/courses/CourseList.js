import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions';
import ViewTopics from '../ViewTopics';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  renderCourses() {
    return this.props.courses.map((course) => {
      return (
        <tr key={course._id}>
          <td>{course.courseId}</td>
          <td>{course.courseTitle}</td>
          <td>{course.courseDescription}</td>
          <td>{course.courseDuration}</td>
          <td>
            <ViewTopics _id={course._id} />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="striped centered">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Course Description</th>
              <th>Course Duration (In Days)</th>
            </tr>
          </thead>
          <tbody>{this.renderCourses()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ courses }) {
  return { courses };
}

export default connect(mapStateToProps, { fetchCourses })(CourseList);

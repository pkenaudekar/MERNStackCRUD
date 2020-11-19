// CourseForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';
import formFields from './formFields';
import AddTopics from '../AddTopics';
import ViewTopicsAndModify from '../ViewTopicsAndModify';
import * as actions from '../../actions';

class CourseForm extends Component {
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
            <AddTopics _id={course._id} />
          </td>
          <td>
            <ViewTopicsAndModify _id={course._id} />
          </td>
        </tr>
      );
    });
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={CourseField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ margin: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Add Courses/Topics</h3>
        </div>
        <div
          style={{
            height: '100%',
            width: '30%',
            position: 'fixed',
            zIndex: 1,
            top: '20vh',
            overflowX: 'hidden',
            paddingTop: '20px',
            left: '1vw',
          }}
        >
          <form
            onSubmit={this.props.handleSubmit((course) =>
              this.props.submitCourse(course)
            )}
          >
            <div>
              {this.renderFields()}
              <button
                //onClick={() => this.props.submitCourse()}
                type="submit"
                className="teal btn-flat right white-text"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            height: '100%',
            width: '65%',
            position: 'fixed',
            zIndex: 1,
            top: '20vh',
            overflowX: 'hidden',
            paddingTop: '20px',
            right: '1vw',
          }}
        >
          <table className="striped centered ">
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

CourseForm = connect(mapStateToProps, actions)(CourseForm);

export default reduxForm({ form: 'courseForm' })(CourseForm);

//export default connect(mapStateToProps, actions)(CourseForm);
//export default reduxForm({  form: 'courseForm',})(connect(actions)(CourseForm));

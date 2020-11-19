import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import CourseForm from './CourseForm';

class CourseNew extends Component {
  renderContent() {
    return <CourseForm />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'courseForm',
})(CourseNew);

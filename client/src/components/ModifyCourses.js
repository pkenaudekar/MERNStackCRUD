import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class ModifyCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curruntCourse: [],
      courseId: '',
      courseTitle: '',
      courseDescription: '',
      courseDuration: '',
    };

    this.onChangeCourseId = this.onChangeCourseId.bind(this);
    this.onChangeCourseTitle = this.onChangeCourseTitle.bind(this);
    this.onChangeCourseDescription = this.onChangeCourseDescription.bind(this);
    this.onChangeCourseDuration = this.onChangeCourseDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeCourseId(event) {
    this.setState({ courseId: event.target.value });
  }

  onChangeCourseTitle(event) {
    this.setState({ courseTitle: event.target.value });
  }

  onChangeCourseDescription(event) {
    this.setState({ courseDescription: event.target.value });
  }

  onChangeCourseDuration(event) {
    this.setState({ courseDuration: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const course = {
      courseId: this.state.courseId,
      courseTitle: this.state.courseTitle,
      courseDescription: this.state.courseDescription,
      courseDuration: this.state.courseDuration,
    };

    this.props.updateCourse(this.state.curruntCourse._id, course);
  }

  componentDidMount() {
    this.setState({
      curruntCourse: this.props.course,
      courseId: this.props.course.courseId,
      courseTitle: this.props.course.courseTitle,
      courseDescription: this.props.course.courseDescription,
      courseDuration: this.props.course.courseDuration,
    });

    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal, options).destroy();
  }

  render() {
    return (
      <div>
        <button
          data-target="modal1"
          className="waves-effect waves-light btn modal-trigger"
          onClick={() => {
            M.Modal.init(this.Modal, this.options).open();
          }}
        >
          Modify
        </button>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>Enter New Data</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="col s3">
                    <label htmlFor="courseId">Course ID</label>
                    <input
                      id="courseId"
                      type="text"
                      className="validate"
                      value={this.state.courseId}
                      onChange={this.onChangeCourseId}
                    />
                  </div>
                  <div className="col s3">
                    <label htmlFor="courseTitle">Course Title</label>
                    <input
                      placeholder=""
                      id="courseTitle"
                      type="text"
                      className="validate"
                      value={this.state.courseTitle}
                      onChange={this.onChangeCourseTitle}
                    />
                  </div>
                  <div className="col s3">
                    <label htmlFor="courseDescription">
                      Course Description
                    </label>
                    <input
                      placeholder=""
                      id="courseDescription"
                      type="text"
                      className="validate"
                      value={this.state.courseDescription}
                      onChange={this.onChangeCourseDescription}
                    />
                  </div>
                  <div className="col s3">
                    <label htmlFor="courseDuration">
                      Course Duration (In Days)
                    </label>
                    <input
                      placeholder=""
                      id="courseDuration"
                      type="text"
                      className="validate"
                      value={this.state.courseDuration}
                      onChange={this.onChangeCourseDuration}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="# "
              className="modal-close waves-effect waves-red btn-flat"
              onClick={() => M.Modal.init(this.Modal, this.options).destroy()}
            >
              Cancel
            </a>
            <a
              type="submit"
              href="# "
              className="modal-close waves-effect waves-green btn-flat"
              onClick={(event) => {
                this.onSubmit(event);
              }}
            >
              Modify
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ curruntCourse }) {
  return { curruntCourse };
}

export default connect(mapStateToProps, actions)(ModifyCourses);

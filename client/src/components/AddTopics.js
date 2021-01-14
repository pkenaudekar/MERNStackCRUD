import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class AddTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _course: '',
      topicId: '',
      topicTitle: '',
      topicDescription: '',
    };

    this.onChangeTopicId = this.onChangeTopicId.bind(this);
    this.onChangeTopicTitle = this.onChangeTopicTitle.bind(this);
    this.onChangeTopicDescription = this.onChangeTopicDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTopicId(event) {
    this.setState({ topicId: event.target.value });
  }

  onChangeTopicTitle(event) {
    this.setState({ topicTitle: event.target.value });
  }

  onChangeTopicDescription(event) {
    this.setState({ topicDescription: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const topic = {
      _course: this.state._course,
      topicId: this.state.topicId,
      topicTitle: this.state.topicTitle,
      topicDescription: this.state.topicDescription,
    };

    this.props.submitTopic(topic);
    document.getElementById('addTopics').reset();
  }

  componentDidMount() {
    this.setState({
      _course: this.props._id,
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
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal3"
          onClick={() => {
            M.Modal.init(this.Modal, this.options).open();
          }}
        >
          Add Topics
        </button>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal3"
          className="modal"
        >
          <div className="modal-content">
            <h4>Enter New Data</h4>
            <div className="row">
              <form className="col s12" id="addTopics">
                <div className="row">
                  <div className="input-field col s4">
                    <input
                      id="topicId"
                      type="text"
                      className="validate"
                      onChange={this.onChangeTopicId}
                    />
                    <label htmlFor="topicId">Topic ID</label>
                  </div>
                  <div className="input-field col s4">
                    <input
                      id="topicTitle"
                      type="text"
                      className="validate"
                      onChange={this.onChangeTopicTitle}
                    />
                    <label htmlFor="topicTitle">Topic Title</label>
                  </div>
                  <div className="input-field col s4">
                    <input
                      id="topicDescription"
                      type="text"
                      className="validate"
                      onChange={this.onChangeTopicDescription}
                    />
                    <label htmlFor="topicDescription">Topic Description</label>
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
              href="# "
              className="modal-close waves-effect waves-green btn-flat"
              onClick={(event) => {
                this.onSubmit(event);
              }}
            >
              Add
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ curruntTopic }) {
  return { curruntTopic };
}

export default connect(mapStateToProps, actions)(AddTopics);

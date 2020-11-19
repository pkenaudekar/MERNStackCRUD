import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class ModifyTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curruntTopics: [],
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
      topicId: this.state.topicId,
      topicTitle: this.state.topicTitle,
      topicDescription: this.state.topicDescription,
    };

    this.props.updateTopic(this.state.curruntTopic._id, topic);
  }

  componentDidMount() {
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
        <a
          href="#modal5"
          data-dismiss="modal"
          className="modal-closewaves-effect waves-light btn modal-trigger"
          onClick={() => M.Modal.init(this.Modal, this.options).open()}
          data-toggle="modal"
          data-target="modal5"
        >
          Modify
        </a>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal5"
          className="modal"
        >
          <div className="modal-content">
            <h4>Enter New Data</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="col s3">
                    <label htmlFor="topicId">Topic ID</label>
                    <input
                      id="topicId"
                      type="text"
                      className="validate"
                      value={this.state.topicId}
                      onChange={this.onChangeTopicId}
                    />
                  </div>
                  <div className="col s3">
                    <label htmlFor="topicTitle">Topic Title</label>
                    <input
                      placeholder=""
                      id="topicTitle"
                      type="text"
                      className="validate"
                      value={this.state.topicTitle}
                      onChange={this.onChangeTopicTitle}
                    />
                  </div>
                  <div className="col s3">
                    <label htmlFor="topicDescription">Topic Description</label>
                    <input
                      placeholder=""
                      id="topicDescription"
                      type="text"
                      className="validate"
                      value={this.state.topicDescription}
                      onChange={this.onChangeTopicDescription}
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
                M.Modal.init(this.Modal, this.options).close();
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

function mapStateToProps({ curruntTopic }) {
  return { curruntTopic };
}

export default connect(mapStateToProps, actions)(ModifyTopics);

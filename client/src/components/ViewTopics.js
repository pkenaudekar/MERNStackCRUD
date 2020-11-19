import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions';
import 'materialize-css/dist/css/materialize.min.css';

class ViewTopics extends Component {
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

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  renderTopics() {
    return this.props.topics.map((topic) => {
      return (
        <tr key={topic._id}>
          <td>{topic.topicId}</td>
          <td>{topic.topicTitle}</td>
          <td>{topic.topicDescription}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <button
          data-target="modal2"
          className="waves-effect waves-light btn modal-trigger"
          onClick={() => {
            M.Modal.init(this.Modal, this.options).open();
            this.props.fetchTopics(this.props._id);
          }}
        >
          View Topics
        </button>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal modal-fixed-footer"
        >
          <div className="modal-content">
            <h4>List of Topics</h4>
            <div>
              <table className="striped centered">
                <thead>
                  <tr>
                    <th>Topic ID</th>
                    <th>Topic Title</th>
                    <th>Topic Description</th>
                  </tr>
                </thead>
                <tbody>{this.renderTopics()}</tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="# "
              className="modal-close waves-effect waves-green btn-flat"
              onClick={() => M.Modal.init(this.Modal, this.options).destroy()}
            >
              Ok
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps, { fetchTopics })(ViewTopics);

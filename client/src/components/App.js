import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import CourseNew from './courses/CourseNew';
import CourseUpdate from './courses/CourseUpdate';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="#ffcc80 orange lighten-3" style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/courses/new" component={CourseNew} />
            <Route exact path="/courses/update" component={CourseUpdate} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

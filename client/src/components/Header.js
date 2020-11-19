import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="#0097a7 cyan darken-2">
          <div className="nav-wrapper">
            <Link to={'/'} className="left brand-logo">
              &nbsp;&nbsp;Course Info
            </Link>
            <ul className="right">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/courses/new">Add Courses</a>
              </li>
              <li>
                <a href="/courses/update">Update/Delete Courses</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

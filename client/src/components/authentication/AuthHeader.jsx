import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * AuthHeader Class Component
 * */
class AuthHeader extends Component {
  /**
   * @return { component }
   * */
  render() {
    return (
      <nav className="wow fadeInDown black-text gradient__bg">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center logo" href="/">
              <p>Boots EM</p>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default AuthHeader;

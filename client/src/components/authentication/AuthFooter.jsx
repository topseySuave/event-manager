import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * AuthFooter Class Component
 * */
class AuthFooter extends Component {
  /**
   * @returns { component }
   * */
  render() {
    return (
      <div className="auth__footer footer">
        <div className="container">
          <div className="center-align">
            <span>
              {' '}
              © 2017, All rights reserved.{' '}
              <Link to="/" href="/">
                Boots Events Manager
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthFooter;

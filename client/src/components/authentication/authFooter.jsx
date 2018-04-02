import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthFooter extends Component {
  render() {
    return (
      <div className="auth__footer footer">
        <div className="container">
          <div className="center-align">
            <span> © 2017, All rights reserved. <Link to="/" href="/">Boots Events Manager</Link></span>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthFooter;

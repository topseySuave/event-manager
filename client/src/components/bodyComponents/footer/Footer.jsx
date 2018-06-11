import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Class Component
 * */
class Footer extends Component {
  /**
   * render Method
   * @returns { Component }
   * */
  render() {
    let year = new Date();
    return (
      <div className="footer">
        <div className="container">
          <div className="center-align">
            <p>
              © {year.getFullYear()}, All rights reserved.
              <Link to="/" href="/">
                {' '}
                Boots Events Manager
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

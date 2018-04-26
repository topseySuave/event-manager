import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Nav from './bodyComponents/headNav/nav';

class NoMatch extends Component {
  render() {
    return (
      <DocumentTitle title="Page not Found | Boots Events Manager">
        <div>
          <div className="body__holdr">
            <Nav />
            <div className="container">
              <div className="center-align">
                <h1>404</h1>
                <h2>Page not Found</h2>
                <h4>
                  <Link to="/" href="/">Back to Home</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default NoMatch;

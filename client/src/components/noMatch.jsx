import React, { Component } from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";
import Footer from "./bodyComponents/footer/footer";
import FixedNav from "./bodyComponents/headNav/fixedNav";

class NoMatch extends Component {
  render() {
    return (
      <DocumentTitle title="Page not Found | Boots Events Manager">
        <div className="body__holdr">
          <FixedNav />
          <div
            className="container"
            style={{ paddingTop: "64px", height: "92vh" }}
          >
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col s12">
                <div className="row">
                  <div className="col s12 m6 l6">
                    <div className="center-align">
                      <h1
                        className="gradient_text"
                        style={{ fontSize: "10em", fontWeight: "lighter" }}
                      >
                        404
                      </h1>
                      <h5>Error page</h5>
                    </div>
                  </div>
                  <div className="col s12 m6 l6">
                    <div className="center-align">
                      <img
                        width="100%"
                        src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif"
                        alt="404 not found"
                      />
                      <h5 className="gradient_text">
                        <b>Houston we have a problem!!!</b>
                      </h5>
                      <h6>
                        we were unable to find the page you are looking for...
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default NoMatch;

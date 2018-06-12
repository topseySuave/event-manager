import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * CallToAction Class Component
 * */
class CallToAction extends Component {
  /**
   * componentDidMount Method
   * @returns { void }
   * */
  componentDidMount() {
    $('.parallax').parallax();
  }

  /**
   * render Method
   * @returns { Component }
   * */
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src="image/5.jpg" alt="parallax-img" />
        </div>
        <div className="container">
          <div className="center-align">
            <div className="row">
              <div className="col s12">
                <h4>Do you want to Manage your Own Event?</h4>
                <h5>View All Centers</h5>
                <br />
                <Link
                  to="centers"
                  className="btn waves-effect red darken-1"
                  href="centers"
                >
                  Centers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;

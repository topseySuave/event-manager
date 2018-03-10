import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutRequest } from '../../../actions/authActions';

class HeaderBanner extends Component {
  showAuthenticationLinks() {
    // Show Sign-in and Sign-up
    // links only if user isn't signed in
    if (!this.props.activeState.isAuthenticated) {
      return (
        <div style={{ float: 'left' }}>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </div>
      );
    }
    return (
      <li>
        <Link to="/signout">Sign Out</Link>
      </li>
    );
  }

  showSignUpActionButton() {
    if (!this.props.activeState.isAuthenticated) {
      return (
        <Link to="/signup" className="btn blue lighten-2 waves-effect animated fadeInLeft">Join Boots Events Manager</Link>
      );
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__overlay">
          <div className="container">
            <nav className="wow fadeInDown">
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo logo">
                  <p>Boots EM</p>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#search__modal" className="modal-trigger" id="search__view"><i className="material-icons">search</i></a>
                  </li>
                  <li><Link to="/centers">List of centers</Link></li>
                  { this.showAuthenticationLinks() }
                </ul>
              </div>
            </nav>

            <div className="center-align header__detail">
              <h4 className="wow fadeInLeft">Worlds Leading Startup events</h4>
              <p className="wow fadeInLeft">Attend Events around you and Add Events.</p>
              { this.showSignUpActionButton() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

const matchDispatchToProps = dispatch => bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(HeaderBanner);

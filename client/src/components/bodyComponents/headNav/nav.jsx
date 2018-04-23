import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutRequest } from '../../../actions/authActions';

class Nav extends Component {
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

  showModal () {
    $('#search__modal').modal('open');
  }

  render() {
    return (
      <div className="navbar-fixed home__nav">
        <nav className="gradient__bg">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo logo">
                <p>Boots EM</p>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a onClick={() => this.showModal()} className="modal-trigger" id="search__view"><i className="material-icons">search</i></a></li>
                <li><Link to="/centers">List of centers</Link></li>

                { this.showAuthenticationLinks() }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

const matchDispatchToProps = dispatch => bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, { matchDispatchToProps })(Nav);

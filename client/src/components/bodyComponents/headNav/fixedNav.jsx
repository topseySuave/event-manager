import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import { signOutRequest } from '../../../actions/authActions';

class FixedNav extends Component {
  componentWillMount() {
    $('.modal').modal();
  }

  showModal () {
    $('#search__modal').modal('open');
  }

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
      <React.Fragment>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon color='white' /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem primaryText={ `Hello ${this.props.activeState.user.lastName}` } />
          <MenuItem primaryText="My Events" containerElement={<Link to="/my-events" />} />
          <Divider />
          <MenuItem primaryText="sign out" containerElement={<Link to="/signout" />} />
        </IconMenu>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="gradient__bg">
            <div className="container">
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo logo">
                  <p>Boots EM</p>
                </Link>
                  <a href="#" data-activates="slide-out" className="button-collapse"><i
                      className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a onClick={() => this.showModal()} className="modal-trigger" id="search__view">
                    <i className="material-icons">search</i></a>
                  </li>
                  <li><Link to="/centers">List of centers</Link></li>
                  { this.showAuthenticationLinks() }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

const matchDispatchToProps = dispatch => bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, { matchDispatchToProps })(FixedNav);

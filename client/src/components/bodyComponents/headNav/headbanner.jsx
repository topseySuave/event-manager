import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionSearch from 'material-ui/svg-icons/action/search';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import { signOutRequest } from '../../../actions/authActions';

class HeaderBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      open: false
    };
  }
  
  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  renderSidenav() {
    return (
      <React.Fragment>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onClick={() => this.showModal()} leftIcon={<ActionSearch />} primaryText="Search" />
          <MenuItem primaryText={`Hello ${this.props.activeState.user.lastName || 'Guest'}`} />
          <MenuItem primaryText="My Events" containerElement={<Link to="/my-events" />} />
          <Divider />
          {(!this.props.activeState.isAuthenticated) ? this.showAuthenticationLinks() : <MenuItem primaryText="sign out" containerElement={<Link to="/signout" />} />}
        </Drawer>
        <FlatButton
          className='right hide-on-med-and-up'
          style={{ margin: '10px', color: '#FFFFFF' }}
          onClick={this.handleToggle}
          icon={<NavigationMenu />}
        />
      </React.Fragment>
    );
  }

  showAuthenticationLinks() {
    // Show Sign-in and Sign-up
    // links only if user isn't signed in
    if (!this.props.activeState.isAuthenticated) {
      return (
        <span>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </span>
      );
    }

    return (
      <React.Fragment>
        <IconMenu
          iconButtonElement={<IconButton><AccountCircle color='white' /></IconButton>}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem primaryText={`Hello ${this.props.activeState.user.lastName}`} />
          <MenuItem primaryText="My Events" containerElement={<Link to="/my-events" />} />
          <Divider />
          <MenuItem primaryText="sign out" containerElement={<Link to="/signout" />} />
        </IconMenu>
      </React.Fragment>
    );
  }

  showModal() {
    $('#search__modal').modal('open');
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
                {this.renderSidenav()}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                    <a onClick={() => this.showModal()} className="modal-trigger" id="search__view">
                      <i className="material-icons">search</i>
                    </a>
                  </li>
                  <li><Link to="/centers">List of centers</Link></li>
                  {this.showAuthenticationLinks()}
                </ul>
              </div>
            </nav>

            <div className="center-align header__detail">
              <h4 className="wow fadeInLeft">Worlds Leading Startup events</h4>
              <p className="wow fadeInLeft">Attend Events around you and Add Events.</p>
              {this.showSignUpActionButton()}
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

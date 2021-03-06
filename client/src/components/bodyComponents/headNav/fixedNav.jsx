import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SocialGroup from 'material-ui/svg-icons/social/group';
import {
  NavigationClose,
  CloseIcon
} from 'material-ui/svg-icons/navigation/close';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';
import { green300 } from 'material-ui/styles/colors';
import List, { ListItem, ListItemText } from 'material-ui/List';

import { signOutRequest } from '../../../actions/authActions';

const appBarStyle = {
  position: 'fixed',
  backgroundImage: 'linear-gradient(to left, #4884b3, #90ec92)'
};
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0
};

/**
 * FixedNav Class Component
 * */
export class FixedNav extends Component {
  /**
   * Class Constructor Method
   * @param { object } props
   * @returns { void }
   * */
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  /**
   * componentDidMount Method
   * @returns { void }
   * */
  componentDidMount() {
    $('.modal').modal();
  }

  /**
   * handleToggle Method
   * @returns { void }
   * */
  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  /**
   * handleClose Method
   * @returns { void }
   * */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * showModal Method
   * @returns { void }
   * */
  showModal() {
    let searchModal = $('#search__modal');
    searchModal.addClass('search__pane');
    searchModal.modal('open');
  }

  /**
   * showMenuItems Method
   * @returns { component }
   * */
  showMenuItems() {
    return (
      <Fragment>
        <List style={flexContainer}>
          <IconButton
            onClick={() => this.showModal()}
            id="search__view"
            tooltip="search"
          >
            <ActionSearch color="#FFFFFF" />
          </IconButton>
          <ListItem
            style={{ color: '#FFFFFF' }}
            primaryText="list of centers"
            containerElement={<Link to="/centers" />}
          />
          {this.showAuthenticationLinks()}
        </List>
      </Fragment>
    );
  }

  /**
   * showAuthenticationLinks Method
   * @returns { component }
   * */
  showAuthenticationLinks() {
    //  Show Sign-in and Sign-up
    //  links only if user isn't signed in
    if (!this.props.activeState.isAuthenticated) {
      return (
        <Fragment>
          <MenuItem
            primaryText="sign in"
            style={{ color: '#FFFFFF' }}
            containerElement={<Link to="/signin" />}
          />
          <MenuItem
            id="signOutBtn"
            primaryText="sign up"
            style={{ color: '#FFFFFF' }}
            containerElement={<Link to="/signup" />}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <IconMenu
          iconButtonElement={
            <IconButton
              id="accountBtn"
            >
              <AccountCircle color="white" />
            </IconButton>
          }
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem
            primaryText={`Hello ${this.props.activeState.user.lastName}`}
          />
          <MenuItem
            primaryText="My Events"
            containerElement={<Link to="/my-events" />}
          />
          <Divider />
          <MenuItem
            id="signOutBtn"
            primaryText="sign out"
            containerElement={<Link to="/signout" />}
          />
        </IconMenu>
      </Fragment>
    );
  }

  /**
   * renderSidenav Method
   * @returns { component }
   * */
  renderSidenav() {
    return (
      <Fragment>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem
            onClick={() => this.showModal()}
            leftIcon={<ActionSearch />}
            primaryText="Search"
          />
          <MenuItem
            primaryText={`Hello ${this.props.activeState.user.lastName ||
              'Guest'}`}
          />
          <MenuItem
            primaryText="My Events"
            containerElement={<Link to="/my-events" />}
          />
          <Divider />
          {!this.props.activeState.isAuthenticated ? (
            this.showAuthenticationLinks()
          ) : (
            <MenuItem
              primaryText="sign out"
              containerElement={<Link to="/signout" />}
            />
          )}
        </Drawer>
        <FlatButton
          className="right hide-on-med-and-up"
          style={{ margin: '10px', color: '#FFFFFF' }}
          onClick={this.handleToggle}
          icon={<NavigationMenu />}
        />
      </Fragment>
    );
  }

  /**
   * render Method
   * @returns { component }
   * */
  render() {
    return (
      <AppBar
        style={appBarStyle}
        title={
          <Link
            className="brand-logo"
            style={{ color: '#FFFFFF' }}
            to="/"
            href="/"
          >
            <img
              style={{
                width: '250px',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '60%'
              }}
              src="/image/logo2.png"
              alt="brand-logo"
            />
          </Link>
        }
        iconElementRight={this.showMenuItems()}
        showMenuIconButton={false}
      />
    );
  }
}

export const mapStateToProps = state => ({
  activeState: state.authReducer
});

export const matchDispatchToProps = dispatch =>
  bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, { matchDispatchToProps })(FixedNav);

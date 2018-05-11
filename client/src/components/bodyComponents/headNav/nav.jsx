import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";
import ActionSearch from "material-ui/svg-icons/action/search";
import MenuItem from "material-ui/MenuItem";
import Divider from "material-ui/Divider";
import Drawer from "material-ui/Drawer";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";

import AppBar from "material-ui/AppBar";
import Toggle from "material-ui/Toggle";
import { green300 } from "material-ui/styles/colors";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import AccountCircle from "material-ui/svg-icons/action/account-circle";

import List, { ListItem, ListItemText } from "material-ui/List";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/styles/typography";
import CloseIcon from "material-ui/svg-icons/navigation/close";
import { Slide } from "material-ui/styles/transitions";

import { signOutRequest } from "../../../actions/authActions";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
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
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem
            onClick={() => this.showModal()}
            leftIcon={<ActionSearch />}
            primaryText="Search"
          />
          <MenuItem
            primaryText={`Hello ${this.props.activeState.user.lastName ||
              "Guest"}`}
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
          style={{ margin: "10px", color: "#FFFFFF" }}
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
          iconButtonElement={
            <IconButton>
              <AccountCircle color="white" />
            </IconButton>
          }
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          targetOrigin={{ horizontal: "left", vertical: "top" }}
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
            primaryText="sign out"
            containerElement={<Link to="/signout" />}
          />
        </IconMenu>
      </React.Fragment>
    );
  }

  showModal() {
    $("#search__modal").modal("open");
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
              {this.renderSidenav()}
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a
                    onClick={() => this.showModal()}
                    className="modal-trigger"
                    id="search__view"
                  >
                    <i className="material-icons">search</i>
                  </a>
                </li>
                <li>
                  <Link to="/centers">List of centers</Link>
                </li>
                {this.showAuthenticationLinks()}
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

const matchDispatchToProps = dispatch =>
  bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, { matchDispatchToProps })(Nav);

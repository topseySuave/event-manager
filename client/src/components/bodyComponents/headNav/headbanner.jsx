import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

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
import history from '../../../util/history';
import { centerBackgrounds } from '../../../util/facilities';
import SearchFasterForm from '../../centerComponent/allCenters/searchFasterForm';

const searchStyle = {
  main: {
    backgroundColor: 'white',
    borderRadius: '8px'
  },
  bold: {
    fontWeight: 200
  }
};

/**
 * MyEventCardHolder Class Component
 * */
class HeaderBanner extends Component {
  /**
   * Class contructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  /**
   * componentDidMount Method
   * @returns { void }
   * */
  componentDidMount() {
    this.changeHeaderBackground();
    this.onScrollToShowNav();
  }

  /**
   * onSearch Method
   * @param { object } query
   * @returns { void }
   * */
  onSearch(query) {
    const qString = queryString.stringify(query, { arrayFormat: 'bracket' });
    history.push(`/centers?${qString}`);
  }

  /**
   * onScrollToShowNav method
   * @returns { void }
   * */
  onScrollToShowNav() {
    let popularEventsHolderTop, homeNav = $('.home__nav');
    let popularEventsHolder = $('.popular__events_holdr');
    $(window).scroll(() => {
      popularEventsHolderTop = popularEventsHolder.offset().top;
      let scrollTop = $(document).scrollTop();

      // when scroll top is greater than the event holder show navbar
      // if not remove it
      if (scrollTop > popularEventsHolderTop) {
        homeNav.css({ display: 'block' });
      } else {
        homeNav.css({ display: 'none' });
      }
    });
  }

  /**
   * handleClose method
   * @returns { void }
   * */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * handleToggle method
   * @returns { void }
   * */
  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  /**
   * showAuthenticationLinks method
   * @returns { component }
   * */
  showAuthenticationLinks() {
    // Show Sign-in and Sign-up
    // links only if user isn't signed in
    if (!this.props.activeState.isAuthenticated) {
      return (
        <span>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
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
            primaryText="sign out"
            containerElement={<Link to="/signout" />}
          />
        </IconMenu>
      </React.Fragment>
    );
  }

  /**
   * showModal method
   * @returns { void }
   * */
  showModal() {
    let searchModal = $('#search__modal');
    searchModal.addClass('search__pane');
    searchModal.modal('open');
  }

  /**
   * showModal method
   * @returns { void }
   * */
  changeHeaderBackground() {
    let i = 0;
    let el = $('.header'); // el doesn't change
    function toggle() {
      el.css({ backgroundImage: `url(${centerBackgrounds[i]})` }); // set the image
      /* *
        * wraps around centerBackgrounds
        * length and update the counter,
        * then reset when length is reached
        * */
      i = (i + 1) % centerBackgrounds.length;
    }
    setInterval(toggle, 5000);
  }

  /**
   * renderSidenav method
   * @returns { component }
   * */
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
      </React.Fragment>
    );
  }

  /**
   * render method
   * @returns { component }
   * @memberOf MyEventCardHolder
   * */
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
            </nav>

            <div className="center-align header__detail">
              <h4 className="wow fadeInLeft">World's Leading Events Centers</h4>
              <p className="wow fadeInLeft">Book Events Centers In Your Area</p>
              <div
                className="row center-align search-faster-form full-width"
                style={searchStyle.main}
              >
                <div className="col s12">
                  <h4 className="center-align gradient_text" style={searchStyle.bold}>
                    Find and Book Event Centers
                  </h4>
                </div>
                <SearchFasterForm onSearch={this.onSearch} />
              </div>
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

const matchDispatchToProps = dispatch =>
  bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(HeaderBanner);

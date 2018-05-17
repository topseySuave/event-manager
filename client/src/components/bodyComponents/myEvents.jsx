import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import FixedNav from './headNav/fixedNav';
import MyEventCardHolder from './myEventsComponent';
import FloatingActionButton from './floatingActionButton/FloatingActionButton';
import Footer from './footer/footer';
import Modals from './../modals';

/**
   * MyEvents Class Component
   * */
class MyEvents extends Component {
  /**
   * Class contructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  /**
   * componentWillMount method
   * @returns { void }
   * */
  componentWillMount() {
    if (this.props.activeState.isAuthenticated) {
      this.setState({ isAuthenticated: true });
    }
  }

  /**
   * render method
   * @returns { Component }
   * */
  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <div className="body__holdr">
          <FixedNav />
          <MyEventCardHolder />
          <FloatingActionButton />
          <Footer />
        </div>
        <Modals />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

export default connect(mapStateToProps)(MyEvents);

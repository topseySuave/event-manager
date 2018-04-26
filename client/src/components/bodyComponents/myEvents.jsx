import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import FixedNav from './headNav/fixedNav';
import MyEventCardHolder from './myEventsComponent';
import FloatingActionButton from './floatingActionButton/FloatingActionButton';
import Footer from './footer/footer';
import Modals from './../modals';

class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentWillMount() {
    if (this.props.activeState.isAuthenticated) {
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/"/>;
    }

    return (
      <React.Fragment>
        <LoadingBar style={{
          backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))',
          height: '2px'
        }}/>
        <div className="body__holdr">
          <FixedNav/>
          <MyEventCardHolder/>
          <FloatingActionButton/>
          <Footer/>
        </div>
        <Modals/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

export default connect(mapStateToProps)(MyEvents);

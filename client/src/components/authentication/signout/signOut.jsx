import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOutRequest } from '../../../actions/authActions';

/**
   * SignOut Class Component
   * */
class SignOut extends Component {
  /**
   * componentWillMount method
   * @returns { void }
   * */
  componentWillMount() {
    this.props.signOutRequest();
  }

  /**
   * render method
   * @returns { Component }
   * @memberOf SignOut
   * */
  render() {
    return (
      <p>signed out</p>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOutRequest } from '../../../actions/authActions';

/**
   * SignOut Class Component
   * */
export class SignOut extends Component {
  /**
   * componentWillMount method
   * @returns { void }
   * */
  componentWillMount() {
    this.props.signOutRequest();
  }

  /**
   * componentWillReceiveProps method
   * @param {object} newProps
   * @returns { void }
   * */
  componentWillReceiveProps(newProps) {
    if (newProps.auth.redirect) {
      window.history.back();
    }
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

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);

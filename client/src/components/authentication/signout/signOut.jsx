import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOutRequest } from '../../../actions/authActions';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutRequest();
  }

  render() {
    return (
      <p>signed out</p>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({ signOutRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);

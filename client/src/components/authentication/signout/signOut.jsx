import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { signOutRequest } from '../../../actions/authActions';

class SignOut extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.signOutRequest();
  }

  render(){
    return (
      <p>signed out</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({signOutRequest: signOutRequest}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);

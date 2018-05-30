import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthHeader from '../AuthHeader';
import AuthFooter from '../authFooter';
import SignUpForm from './signUpForm';
import { userSignupRequest } from '../../../actions/authActions';

/**
   * SignUp Class Component
   * */
export class SignUp extends Component {
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
    if (this.state.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <DocumentTitle title="Sign up | Boots Events Manager">
        <div>
          <AuthHeader />
          <div className="signin__card_holdr wow fadeInUp">
            <div className="container">
              <div className="row">
                <SignUpForm userSignupRequest={userSignupRequest} />
              </div>
            </div>
          </div>

          <div className="empty" />

          <AuthFooter />
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  userSignupRequest
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


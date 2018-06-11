import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import AuthHeader from '../AuthHeader';
import AuthFooter from '../AuthFooter';
import SignInForm from './SignInForm';

/**
   * SignIn Class Component
   * */
class SignIn extends Component {
  /**
   * render method
   * @returns { Component }
   * @memberof SignIn
   * */
  render() {
    return (
      <DocumentTitle title="Sign In | Boots Events Manager">
        <div>
          <AuthHeader />

          <div className="signin__card_holdr wow fadeInUp">
            <div className="container">
              <div className="row">
                <SignInForm />
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

export default SignIn;

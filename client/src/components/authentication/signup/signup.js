import React, { Component } from 'react'
// import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'
import AuthHeader from '../AuthHeader'
import AuthFooter from '../authFooter'
import SignUpForm from './signUpForm'
import { userSignupRequest } from '../../../actions/signupActions'

class SignUp extends Component {
    render(){
        return (
            <div>
                {/*<LoadingBar style={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: '2px' }} />*/}

                <AuthHeader />
                <div className="signin__card_holdr wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <SignUpForm  userSignupRequest={userSignupRequest} />
                        </div>
                    </div>
                </div>

                <div className="empty"></div>

                <AuthFooter />
            </div>
        );
    }
}

SignUp.propTypes = {
    userSignupRequest: userSignupRequest
};

export default connect(null, { userSignupRequest})(SignUp)
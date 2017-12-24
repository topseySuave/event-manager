import React, { Component } from 'react'
import LoadingBar from 'react-redux-loading-bar'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { bindActionCreators } from 'redux'
import AuthHeader from '../AuthHeader'
import AuthFooter from '../authFooter'
import SignInForm from './signInForm'
import { userSignInRequest } from '../../../actions/authActions'

class SignIn extends Component {
    render(){
        return (
            <DocumentTitle title="Sign In | Boots Events Manager">
                <div>
                    <LoadingBar style={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: '2px' }} />

                    <AuthHeader />

                    <div className="signin__card_holdr wow fadeInUp">
                        <div className="container">
                            <div className="row">
                                <SignInForm userSignInRequest={userSignInRequest} signedUpAction={queryString.parse(this.props.location.search)} />
                            </div>
                        </div>
                    </div>

                    <div className="empty"></div>

                    <AuthFooter />
                </div>
            </DocumentTitle>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userSignInRequest: userSignInRequest
    }, dispatch)
};

export default connect(null, { mapDispatchToProps })(SignIn)
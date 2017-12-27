import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import DocumentTitle from 'react-document-title'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthHeader from '../AuthHeader'
import AuthFooter from '../authFooter'
import SignUpForm from './signUpForm'
import { userSignupRequest } from '../../../actions/authActions'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }

    componentWillMount(){
        if(localStorage.getItem('jwtToken')){
            this.setState({isAuthenticated: true});
        }
    }

    render(){
        if(this.state.isAuthenticated){
            return <Redirect to="/" />
        }
        return (
            <DocumentTitle title="Sign up | Boots Events Manager">
                <div>
                    <LoadingBar style={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: '2px' }} />

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
            </DocumentTitle>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userSignupRequest: userSignupRequest
    }, dispatch);
};


export default connect(mapDispatchToProps)(SignUp)
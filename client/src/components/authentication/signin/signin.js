import React, { Component } from 'react'
import LoadingBar from 'react-redux-loading-bar'
import AuthHeader from '../AuthHeader'
import AuthFooter from '../../bodyComponents/footer/authFooter.js'

export default class SignIn extends Component {
    render(){
        return (
            <div>
                <LoadingBar style={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: '2px' }} />

                <AuthHeader />
                <div className="signin__card_holdr wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <form className="col s12" id="signin-form" method="post">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" minlength="5" required />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12 center-align">
                                        <button className="btn col s12 gradient__bg btn-register waves-effect waves-light" type="submit" name="action">Sign In</button>
                                    </div>
                                    <p className="center-align">
                                        <span>Don't Have an Account? Sign Up <a href="signup.html">here</a></span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="empty"></div>
                <AuthFooter />
            </div>
        );
    }
}
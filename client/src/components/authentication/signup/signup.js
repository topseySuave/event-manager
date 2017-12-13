import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import AuthHeader from '../AuthHeader'
import AuthFooter from '../authFooter'

export default class SignUp extends Component {
    render(){
        return (
            <div>
                <LoadingBar style={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: '2px' }} />

                <AuthHeader />
                <div className="signin__card_holdr wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <form className="col s12" id="reg-form" method="post">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="first_name" type="text" className="validate" required />
                                            <label htmlFor="first_name">First Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="last_name" type="text" className="validate" required />
                                            <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" required />
                                            <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" minLength="6" required />
                                            <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12 center-align">
                                        <button className="col s12 btn waves-effect gradient__bg waves-light" type="submit" name="action">Register</button>
                                    </div>
                                    <p className="center-align">
                                        <span>Already signed Up? Login <Link to="signin">here</Link></span>
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
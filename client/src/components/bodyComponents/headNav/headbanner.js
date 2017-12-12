import React, { Component } from 'react';

class HeaderBanner extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__overlay">
                    <div className="container">
                        <nav className="wow fadeInDown">
                            <div className="nav-wrapper">
                                <a href="index.html" className="brand-logo logo">
                                    <p>Boots EM</p>
                                </a>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="#search__modal" className="modal-trigger" id="search__view"><i
                                        className="material-icons">search</i></a></li>
                                    <li><a href="centers.html">List of centers</a></li>
                                    <li><a href="signin.html">Sign In</a></li>
                                    <li><a href="signup.html">Sign Up</a></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="center-align header__detail">
                            <h4 className="wow fadeInLeft">Worlds Leading Startup events</h4>
                            <p className="wow fadeInLeft">Attend Events around you and Add Events.</p>
                            <a href="signup.html" className="btn blue lighten-2 waves-effect animated fadeInLeft">Join Boots Events
                                Manager</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBanner;

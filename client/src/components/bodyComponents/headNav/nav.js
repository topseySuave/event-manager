import React, { Component } from 'react';
import HeaderBanner from './headbanner'

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed home__nav">
                    <nav className="gradient__bg">
                        <div className="container">
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
                        </div>
                    </nav>
                </div>

                <HeaderBanner />
            </div>
        );
    }
}

export default Nav;

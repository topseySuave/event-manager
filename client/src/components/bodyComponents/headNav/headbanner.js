import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderBanner extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__overlay">
                    <div className="container">
                        <nav className="wow fadeInDown">
                            <div className="nav-wrapper">
                                <Link to="/" className="brand-logo logo">
                                    <p>Boots EM</p>
                                </Link>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="#search__modal" className="modal-trigger" id="search__view"><i
                                        className="material-icons">search</i></a></li>
                                    <li><Link to="centers">List of centers</Link></li>
                                    <li><Link to="signin">Sign In</Link></li>
                                    <li><Link to="signup">Sign Up</Link></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="center-align header__detail">
                            <h4 className="wow fadeInLeft">Worlds Leading Startup events</h4>
                            <p className="wow fadeInLeft">Attend Events around you and Add Events.</p>
                            <Link to="signup" className="btn blue lighten-2 waves-effect animated fadeInLeft">Join Boots Events
                                Manager</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBanner;

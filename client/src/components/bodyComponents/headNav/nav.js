import React, { Component } from 'react';
import { Link } from 'react-router'

class Nav extends Component {
    render() {
        return (
            <div className="navbar-fixed home__nav">
                <nav className="gradient__bg">
                    <div className="container">
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
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;

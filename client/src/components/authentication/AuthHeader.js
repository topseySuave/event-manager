import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AuthHeader extends Component {
    render(){
        return (
            <nav className="wow fadeInDown black-text gradient__bg">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo center logo">
                            <p>Boots EM</p>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default AuthHeader;
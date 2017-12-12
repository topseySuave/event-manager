import React, { Component } from 'react'

export default class AuthHeader extends Component {
    render(){
        return (
            <nav className="wow fadeInDown black-text gradient__bg">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="index.html" className="brand-logo center logo">
                            <p>Boots EM</p>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
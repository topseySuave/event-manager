import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AuthFooter extends Component {
    render() {
        return (
            <div className="auth__footer footer">
                <div className="container">
                    <div className="center-align">
                        <p>© 2017, All rights reserved.
                            <Link to="/">Boots Events Manager</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

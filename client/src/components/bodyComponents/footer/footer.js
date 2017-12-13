import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
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

export default Footer;

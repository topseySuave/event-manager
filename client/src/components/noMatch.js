import React, { Component } from 'react'
import { Link } from 'react-router'
import Nav from './bodyComponents/headNav/nav'

class NoMatch extends Component{
    render(){
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="center-align">
                        <h2>404 Page not Found</h2>
                        <h4>
                            <Link to='/'>Back to Home</Link>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoMatch;
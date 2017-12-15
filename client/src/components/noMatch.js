import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import Nav from './bodyComponents/headNav/nav'

class NoMatch extends Component{
    render(){
        return (
            <DocumentTitle title="Page not Found | Boots Events Manager">
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
            </DocumentTitle>
        );
    }
}

export default NoMatch;
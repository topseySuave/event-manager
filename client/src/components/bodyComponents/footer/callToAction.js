import React, { Component } from 'react';

class CallToAction extends Component {
    render() {
        return (
            <div className="parallax-container">
                <div className="parallax">
                    <img src="image/5.jpg" />
                </div>
                <div className="container">
                    <div className="center-align">
                        <div className="row">
                            <div className="col s12">
                                <h4>Do you want to Manage your Own Event?</h4>
                                <h5>View All Centers</h5>
                                <br/>
                                <a href="centers.html" className="btn waves-effect red darken-1">Centers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CallToAction;

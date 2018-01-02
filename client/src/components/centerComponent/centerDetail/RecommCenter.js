import React, { Component } from 'react'
import CenterCard from '../centerCard/centerCard'

class RecommCenter extends Component{
    render() {
        return (
            <div className="row">
                <div className="divider"></div>

                <h5>Recommended Center</h5>
                <div className="col s12 l12">
                    <CenterCard />
                </div>
            </div>
        );
    }
}

export default RecommCenter;
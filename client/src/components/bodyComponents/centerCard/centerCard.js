import React, { Component } from 'react';

class CenterCard extends Component {
    render() {
        return (
            <div className="col s12 l4">
                <a href="center-details.html">
                    <div className="card">
                        <div className="card-image">
                            <img src="image/1.jpg" />
                        </div>
                        <div className="card-content black-text">
                            <p className="f__size">Lighthouse Event Center Small Hall</p>
                            <p><i className="material-icons f15">location_on</i>Egbeda, Alimosho, Lagos</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default CenterCard;
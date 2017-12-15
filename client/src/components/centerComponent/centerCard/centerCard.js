import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CenterCard extends Component {
    render() {
        return (
            <Link to="center-detail" key={Math.random() * Math.random() * 999999}>
                <div className="card">
                    <div className="card-image">
                        <img src="image/1.jpg" />
                    </div>
                    <div className="card-content black-text">
                        <p className="f__size">Lighthouse Event Center Small Hall</p>
                        <p><i className="material-icons f15">location_on</i>Egbeda, Alimosho, Lagos</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default CenterCard;
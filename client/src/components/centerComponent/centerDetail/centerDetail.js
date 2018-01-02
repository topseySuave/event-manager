import React, {Component} from 'react';
// import EventCard from '../../bodyComponents/eventsCard/eventCard'
// import CenterCard from '../centerCard/centerCard'
import CurrentEventForCenter from './currentEventForCenter'
import RecommCenter from './RecommCenter'

class CenterDetail extends Component{
    render(){
        return (
            <div className="container">
                <div className="center__holdr">
                    <div className="row">
                        <div className="col s12 l8">
                            <div className="center__details">
                                <h4>Lighthouse Event Center Small Hall</h4>
                                <div className="slider__holdr">
                                    <div className="carousel carousel-slider">
                                        <a className="carousel-item" href="#one!"><img src="image/1.jpg" /></a>
                                    </div>
                                </div>
                                <p><i className="material-icons f15">location_on</i>64, Idimu Road, Opposite Gowon Estate, Mokola Bus Stop, Egbeda, Alimosho, Lagos</p>
                                <div className="divider"></div>
                                <section>
                                    <h5>About this Center</h5>
                                    <p>The Lighthouse Event Center small hall offers a beautiful, spacious, and elegant venue, with seating capacity for 220 guests dinner style. This small hall can serve as a venue for weddings, parties, special events etc.</p>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <div className="col s4">
                                            <p>Capacity</p>
                                        </div>
                                        <div className="col s8">
                                            <p>Optimum <span>200</span> - Maximum <span>300</span></p>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <div className="col s4">
                                            <p>Price</p>
                                        </div>
                                        <div className="col s8">
                                            <p><span>₦200,000.00</span> per event</p>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="row">
                                        <div className="col s4">
                                            <p>Facilities</p>
                                        </div>
                                        <div className="col s8">
                                            <ul className="facility__list">
                                                <li>Chairs</li>
                                                <li>Security</li>
                                                <li>Air Conditioner</li>
                                                <li>Tables</li>
                                                <li>Changing Room</li>
                                                <li>Parking Space</li>
                                                <li>Stage Lighting</li>
                                                <li>Power</li>
                                                <li>Generator</li>
                                                <li>Rest Room</li>
                                                <li>Television</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <a href="#edit_center_modal" className="center-align modal-trigger btn btn-large waves-effect">Edit this center</a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <CurrentEventForCenter/>

                    </div>
                    <RecommCenter />
                </div>
            </div>
        );
    }
}

export default CenterDetail;
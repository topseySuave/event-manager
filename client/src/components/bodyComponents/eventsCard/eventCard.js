import React, { Component } from 'react';

class EventCard extends Component {
    render() {
        return (
            <div className="col s12 l4">
                <div className="card wow fadeInUp">
                    <div className="card-image">
                        <img src="image/2.jpg" />
                        <span className="card-title">A title for this event</span>
                        <a className="btn-floating activator halfway-fab waves-effect waves-light red tooltipped"
                           data-position="bottom" data-tooltip="share">
                            <i className="material-icons">share</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <p><i className="material-icons f15">schedule</i> Sat, Nov 25 8:00am</p>
                        <div>
                            <i className="material-icons f15">location_on</i> Muson center, Lagos
                            <i className="material-icons dropdown-button right pointer" data-activates="dropdown1">more_vert</i>

                            <ul id="dropdown1" className="dropdown-content">
                                <li>
                                    <a href="#add_event_modal" className="modal-trigger">Edit</a>
                                </li>
                                <li>
                                    <a href="#!">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><a>A title for this event</a><i
                    className="material-icons right">close</i></span>
                        <small>Here is some more information about this product that is only revealed once clicked
                            on.
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventCard;
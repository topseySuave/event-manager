import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import shortid from 'shortid'

class EventCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            event: {},
            location: ''
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps){
            this.setState({ event: newProps });
        }
    }

    render() {
        let { id, title, img_url, description } = this.state.event;
        return (
            <div className="card wow fadeInUp" key={shortid.generate()}>
                <div className="card-image">
                    <img src={img_url} />
                    <span className="card-title">{title}</span>
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
                <span className="card-title grey-text text-darken-4"><a>{title}</a><i
                    className="material-icons right">close</i></span>
                    <small>{description}</small>
                </div>
            </div>
        );
    }
}

EventCard.propTypes = {
    event: PropTypes.object
};

export default EventCard;
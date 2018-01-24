import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { PropsTypes } from 'prop-types'
import { CircularLoader } from '../loader'

import shortid from 'shortid'
import EventCard from './eventsCard/eventCard';
import { fetchEventRequest } from './../../actions/events-actions'

class IndexEventCardHolder extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            events: []
        };

        this.props.fetchEventRequest();
    }

    componentWillReceiveProps(newProps){
        this.setState({
            isLoading: false,
            events: newProps.allEvents.events
        });
    }

    renderEventsCard(){
        let events = this.state.events;
        return events.map((event) => {
            return (
                <EventCard key={shortid.generate()} event={event}/>
            );
        });
    }

    render() {
        let { isLoading } = this.state;
        return (
            <div className="popular__events_holdr">
                <div className="container popular__events">
                    { (isLoading) ?
                        <div style={{height: '500px', marginTop: '100px'}}>
                            <CircularLoader />
                        </div>
                        :
                        <div className="row">
                            <div className="col s12 cards-container">
                                {this.renderEventsCard()}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchEventRequest: fetchEventRequest}, dispatch);
};

const mapStateToProps = (state) => {
    return {
        allEvents: state.eventReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexEventCardHolder);
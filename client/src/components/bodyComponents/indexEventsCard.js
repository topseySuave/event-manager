import React, { Component } from 'react';
import EventCard from './eventCard';

class IndexEventCardHolder extends Component {
    render() {
        return (
            <div className="popular__events_holdr">
                <div className="container popular__events">
                    <div className="row">
                        <div className="col s12 l4">
                            <EventCard key="1"/>
                        </div>
                        <div className="col s12 l4">
                            <EventCard key="2"/>
                        </div>
                        <div className="col s12 l4">
                            <EventCard key="3"/>
                        </div>
                        <div className="col s12 l4">
                            <EventCard key="4"/>
                        </div>
                        <div className="col s12 l4">
                            <EventCard key="5"/>
                        </div>
                        <div className="col s12 l4">
                            <EventCard key="6"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexEventCardHolder;
import React, { Component } from 'react';
import EventCard from './eventCard';

class IndexEventCardHolder extends Component {
    render() {
        return (
            <div className="popular__events_holdr">
                <div className="container popular__events">
                    <div className="row">
                        <EventCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexEventCardHolder;
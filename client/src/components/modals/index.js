import React, { Component } from 'react';
import EventModal from './EventModal'
import CenterModal from './CenterModal'
import SearchModal from './searchModal'

class Modals extends Component {
    render() {
        return (
            <div>
                <EventModal />
                <CenterModal />
                <SearchModal />
            </div>
        );
    }
}

export default Modals;

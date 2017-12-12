import React, { Component } from 'react';

class FloatingActionButton extends Component {
    render() {
        return (
            <div className="fixed-action-btn wow zoomIn">
                <a href="#add_event_modal" className="tooltipped modal-trigger btn-large btn-floating green" data-position="top"
                   data-tooltip="Add Event"><i className="material-icons">add</i>
                </a>
                <a href="#edit_center_modal" className="tooltipped modal-trigger btn-large btn-floating amber lighten-1" data-position="top"
                   data-tooltip="Add Center"><i className="material-icons">add</i>
                </a>
            </div>
        );
    }
}

export default FloatingActionButton;

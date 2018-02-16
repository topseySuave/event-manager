import React, { Component } from 'react';
import EditEventModal from './eventModalForm/editEventModal';
import CenterModal from './CenterModal';
import SearchModal from './searchModal';

class Modals extends Component {
  renderModal() {
    return (
      <div id="add_event_modal" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4><span>Edit</span> Event</h4>
          <EditEventModal />
        </div>
        <div className="modal-footer">
          <a href="#_=_" className="modal-action modal-close waves-effect btn-flat">Cancel</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderModal()}
        <CenterModal />
        <SearchModal />
      </div>
    );
  }
}

export default Modals;

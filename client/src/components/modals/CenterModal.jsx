import React, { Component } from 'react';
import AddCenterForm from './centerModalForms/addCenterForm';

/**
 * CenterModal Class Component
 * */
class CenterModal extends Component {
  /**
   * render Method Component
   * @return { component }
   * */
  render() {
    return (
      <div id="edit_center_modal" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>
            <span>Create</span> Center
          </h4>
          <div className="row">
            <AddCenterForm />
          </div>
        </div>
        <div className="modal-footer">
          <a className="modal-action modal-close waves-effect btn-flat">
            Cancel
          </a>
        </div>
      </div>
    );
  }
}

export default CenterModal;

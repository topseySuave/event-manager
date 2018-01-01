import React, { Component } from 'react';
import AddCenterForm from './modalForms/addCenterForm'

class CenterModal extends Component {

    render() {
        return (
            <div id="edit_center_modal" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4><span>Create</span> Center</h4>
                    <div className="row">
                        <AddCenterForm />
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect btn-flat">Cancel</a>
                    {/*<a onClick={this.onClick()} className="btn waves-effect gradient__bg lighten-1">Create</a>*/}
                </div>
            </div>
        );
    }
}

export default CenterModal;

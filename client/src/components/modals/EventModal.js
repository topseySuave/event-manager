import React, { Component } from 'react';

class EventModal extends Component {
    render() {
        return (
            <div id="add_event_modal" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4><span>Create</span> Event</h4>
                    <div className="row">
                        <form className="col s12" id="add-event-form">
                            <div className="row">
                                <div className="col s6">
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>Upload</span>
                                            <input type="file" />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" placeholder="Upload an image here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-field col s6">
                                    <input id="event_title" type="text" className="validate" required />
                                        <label htmlFor="event_title">Title</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="location" type="text" className="validate" required />
                                        <label htmlFor="location">Location</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="startDate" type="date" className="validate" required />
                                </div>
                                <div className="input-field col s6">
                                    <input id="endDate" type="date" className="validate" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" type="text" className="materialize-textarea validate"
                                              required></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect btn-flat">Cancel</a>
                    <a href="#!" className="btn waves-effect green lighten-1">Create</a>
                </div>
            </div>
        );
    }
}

export default EventModal;

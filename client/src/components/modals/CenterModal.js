import React, { Component } from 'react';

class CenterModal extends Component {
    render() {
        return (
            <div id="edit_center_modal" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4><span>Create</span> Center</h4>
                    <div className="row">
                        <form className="col s12" id="edit-center-form">
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
                                    <select multiple>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Select Facilities</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="location" type="text" className="validate" required />
                                        <label htmlFor="location">Location</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="price" type="number" className="validate" required />
                                        <label htmlFor="price">Price</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="capacity" type="number" className="validate" required />
                                        <label htmlFor="capacity">Capacity</label>
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

export default CenterModal;

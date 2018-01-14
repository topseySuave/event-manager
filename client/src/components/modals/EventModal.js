import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createEventRequest } from '../../actions/events-actions'
import InputForm from '../../components/form/formInput'
import { validateEventInput } from './validateInput'

class EventModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            errors: {},
            editEvent: false,
            centerId: 0,
            userId: 0,
            title: '',
            img_url: '',
            startDate: '',
            endDate: '',
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);
    }

    checkForEditEvent(){
        if(this.props.event.editEvent){
            let { title, img_url, startDate, endDate, description } = this.props.event.eventToEdit;
            this.setState({
                editEvent: true,
                centerId: this.props.activeCenter.centr.id,
                userId: this.props.actUser.user.id,
                title: title,
                img_url: img_url,
                startDate: startDate,
                endDate: endDate,
                description: description
            });
        }
    }

    isValid(){
        const {errors, isValid} = validateEventInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    handleInputChange(e){
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, !!this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            })
        } else {
            this.setState({[e.target.name]: e.target.value});
        }
    }

    handleEventSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({
                isLoading: true
            });

            this.props.createEventRequest(this.state)
                .then((res)=>{
                    this.setState({isLoading: false});
                    if(res){
                        window.location.reload();
                    }else{
                        Materialize.toast('Houston, we have a problem! We are working on it', 5000);
                    }
                })
                .catch(()=>{
                    this.setState({isLoading: false});
                    Materialize.toast('Error creating center..!!', 5000);
                });
        }
    }

    render() {
        this.checkForEditEvent();
        let {isLoading, editEvent, title, description, endDate, startDate, errors} = this.state;
        return (
            <div id="add_event_modal" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4><span>{ (editEvent) ? 'Edit' : 'Create' }</span> Event</h4>
                    <div className="row">
                        <form className="col s12" id="add-event-form" onSubmit={this.handleEventSubmit}>
                            <div className="row">
                                <div className="col s6">
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>Upload</span>
                                            <input type="file" name="img_url" />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" placeholder="Upload an image here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-field col s6">
                                    <InputForm
                                        type="text"
                                        fieldId="event_title"
                                        nameField="title"
                                        label="Title"
                                        value={title}
                                        error={errors.title || ''}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <InputForm
                                        type="date"
                                        fieldId="startDate"
                                        nameField="startDate"
                                        value={startDate}
                                        error={errors.startDate || ''}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <InputForm
                                        type="date"
                                        fieldId="endDate"
                                        nameField="endDate"
                                        value={endDate}
                                        error={errors.endDate || ''}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        type="text"
                                        className="materialize-textarea validate"
                                        required
                                        onChange={this.handleInputChange}
                                        value={description} ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <button
                                        type="submit"
                                        name="submitEvent"
                                        className="btn waves-effect col s12 gradient__bg"
                                    >
                                        {
                                            (isLoading) ?
                                            <img style={{marginTop: "10px"}} src="/image/loader/loading.gif"/> : 'Add Event'
                                        }
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect btn-flat">Cancel</a>
                    {/*<a href="#!" className="btn waves-effect green lighten-1">Create</a>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeCenter: state.activeCenter,
        event: state.eventReducer,
        actUser: state.authReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createEventRequest: createEventRequest}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);

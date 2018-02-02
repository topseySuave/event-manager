import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createEventRequest } from '../../../actions/events-actions'
import InputForm from '../../../components/form/formInput'
import { validateEventInput } from '../validateInput'
import { EDIT_EVENT } from '../../../actions'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

class EventModal extends Component {
    constructor(props){
        super(props);

        const startDate = new Date();
        const endDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);
        endDate.setFullYear(endDate.getFullYear() - 1);

        this.state = {
            open: false,
            disableYearSelection: false,
            isLoading: false,
            errors: {},
            centerId: 0,
            userId: 0,
            title: '',
            img_url: '',
            startDate: null,
            endDate: null,
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }

    updateState(newProps){
        if(newProps.event.editEvent){
            let { title, img_url, startDate, endDate, description, centerId, userId } = newProps.event.eventToEdit;
            this.setState({
                centerId: centerId,
                userId: userId,
                title: title,
                img_url: img_url,
                startDate: startDate,
                endDate: endDate,
                description: description
            });
        }else{
            if(newProps.activeCenter.centr)
                this.setState({
                    centerId: newProps.activeCenter.centr.id,
                    userId: newProps.actUser.user.id,
                });
        }
    }

    componentDidMount(){
        this.updateState(this.props);
    }

    componentWillReceiveProps(newProps){
        this.updateState(newProps);
    }

    isValid(){
        const {errors, isValid} = validateEventInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    handleChangeStartDate = (e, date) => {
        if(new Date(date) < new Date()){
            Materialize.toast('Date isn\'t correct. Should be a day after today not before', 5000);
            this.setState({
                startDate: {},
            });
        }else{
            this.setState({
                startDate: date.toDateString(),
            });
        }
    };

    handleChangeEndDate = (e, date) => {
        if(new Date(date) < new Date()){
            Materialize.toast('Date isn\'t correct. Should be a day after today not before', 5000);
            this.setState({
                endDate: {},
            });
        }else{
            this.setState({
                endDate: date.toDateString(),
            });
        }
    };

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

    onFileChange (e) {
        let file = e.target.files[0];
        if (file.type.indexOf('image/') > -1) { // only image file
            if(file.size < 2000000){
                let reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(file); // read the local file
                reader.onloadend = () => {
                    this.setState({
                        img_url: reader.result //store image as binary data string
                        // img_url: file
                    });
                }
            }else{
                Materialize.toast('File too large', 5000);
            }
        }else{
            Materialize.toast('Please select only images', 5000)
        }
    };

    handleEventSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({
                isLoading: true
            });

            this.props.createEventRequest(this.state)
                .then((data)=>{
                    this.setState({isLoading: false});
                    if(data.type == EDIT_EVENT){
                        Materialize.toast('Event has been created successfully', 5000);
                        this.setState({ title: '', description: '' });
                    }else{
                        Materialize.toast(data.message, 5000);
                    }
                });
        }
    }

    render() {
        let {isLoading, title, description, endDate, startDate, errors} = this.state;
        return (
            <div className="row" style={{marginTop: '20px'}}>
                <form className="col s12" id="add-event-form" >
                    <div className="row">
                        <div className="col s6">
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>Upload</span>
                                    <input
                                        type="file"
                                        name="img_url"
                                        accept="image/jpeg,jpg,png,gif"
                                        onChange={this.onFileChange}
                                    />
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
                            <DatePicker
                                onChange={this.handleChangeStartDate}
                                autoOk={true}
                                floatingLabelText="Start Date"
                                value={startDate}
                                disableYearSelection={this.state.disableYearSelection}
                            />
                            { errors.startDate && <span className="red-text accent-1">{errors.startDate}</span> }
                        </div>
                        <div className="input-field col s6">
                            <DatePicker
                                onChange={this.handleChangeEndDate}
                                autoOk={true}
                                floatingLabelText="End Date"
                                value={endDate}
                                disableYearSelection={this.state.disableYearSelection}
                            />
                            { errors.endDate && <span className="red-text accent-1">{errors.endDate}</span> }
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                type="text"
                                name="description"
                                className="materialize-textarea validate"
                                required
                                onChange={this.handleInputChange}
                                value={description}
                            ></textarea>
                        </div>
                    </div>
                </form>
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

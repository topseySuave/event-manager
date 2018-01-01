import React, { Component } from 'react';
import shortid from 'shortid'
import InputForm from '../../form/formInput'
import { validateCenterInput } from './validateCenterInput'
import facilities from '../../../util/facilities'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { createCenterRequest } from '../../../actions/modalAction'

class AddCenterForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            facilities: [],
            location: '',
            price: '',
            capacity: '',
            description: '',
            errors: {},
            isLoading: false
        };

        this.handleCenterChange = this.handleCenterChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCenterSubmit = this.handleCenterSubmit.bind(this);
    }

    handleCenterChange(e) {
        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign({}, !!this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            })
        }else{
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    isValid() {
        const { errors, isValid } = validateCenterInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    handleSelectChange(e){
        let options = e.target.options;
        let values = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }
        this.setState({ facilities: values });
    }

    handleCenterSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({
                isLoading: true
            });

            this.props.createCenterRequest(this.state)
                .then((res)=>{
                    if(res){
                        window.location.reload();
                    }else{
                        Materialize.toast('Houston, we have a problem! We are working on it');
                    }
                })
                .catch(()=>{
                    Materialize.toast('Houston, we have a problem! We are working on it');
                });
        }
    }

    renderFacilities(){
        return facilities().map((facility) => {
            return (
                <option value={facility} key={shortid.generate()}>{facility}</option>
            )
        });
    }

    render(){
        const { errors, isLoading } = this.state;
        return (
            <form className="col s12" id="edit-center-form" onSubmit={this.handleCenterSubmit}>
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
                        <InputForm
                            fieldId = "title"
                            nameField = "title"
                            value = {this.state.title}
                            error = {errors.title || ''}
                            type="text"
                            onChange = {this.handleCenterChange}
                            label = "Title"
                        />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="facilities">Select Facilities</label>
                    <select
                        style={{display: 'block'}}
                        multiple
                        name="facilities"
                        id="facilities"
                        value={this.state.facilities}
                        onChange={this.handleSelectChange}>
                        <option defaultValue="" disabled selected>Choose the facilities for this center</option>
                        {this.renderFacilities()}
                    </select>

                    <div className="input-field col s12">
                        <InputForm
                            fieldId = "location"
                            nameField = "location"
                            value = {this.state.location}
                            error = {errors.location || ''}
                            type="text"
                            onChange = {this.handleCenterChange}
                            label = "Location"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <InputForm
                            fieldId = "price"
                            nameField = "price"
                            value = {this.state.price}
                            error = {errors.price || ''}
                            type="number"
                            onChange = {this.handleCenterChange}
                            label = "Price"
                            minValue = "100"
                        />
                    </div>
                    <div className="input-field col s6">
                        <InputForm
                            fieldId = "capacity"
                            nameField = "capacity"
                            value = {this.state.capacity}
                            error = {errors.capacity || ''}
                            type="number"
                            onChange = {this.handleCenterChange}
                            label = "Capacity"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            onChange={this.handleCenterChange}
                            className="materialize-textarea validate"
                            required
                        ></textarea>
                        { errors.description ? <span className="red-text accent-1">{errors.description}</span> : '' }
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button
                            type="submit"
                            id="submitCenterForm"
                            name="action"
                            className="btn col s12 white-text gradient__bg btn-register waves-effect waves-light"
                            disabled={ isLoading ? 'disabled' : '' }
                        >
                            { !isLoading ? "add center" : <img style={{marginTop: "10px"}} src="/image/loader/loading.gif"/> }
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createCenterRequest: createCenterRequest}, dispatch);
};

export default connect(null, mapDispatchToProps)(AddCenterForm)
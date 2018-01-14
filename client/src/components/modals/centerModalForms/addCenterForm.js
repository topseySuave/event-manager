import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import shortid from 'shortid'
import InputForm from '../../form/formInput'
import {validateCenterInput} from '../validateInput'
import facilities from '../../../util/facilities'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import {createCenterRequest} from '../../../actions/modalAction'

class AddCenterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            isLoading: false,
            title: '',
            img_url: {},
            facilities: [],
            location: '',
            price: '',
            capacity: '',
            description: ''
        };

        this.handleCenterChange = this.handleCenterChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCenterSubmit = this.handleCenterSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);

    }

    handleCenterChange(e) {
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
        // let img_url;
        // this.setState({ img_url: JSON.stringify(e.target.files[0]) });
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
        }
        // this.setState({ img_url: img_url });
        // console.log(this.state);
    };

    isValid() {
        const {errors, isValid} = validateCenterInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    handleSelectChange = (event, index, facilities) => this.setState({facilities});

    menuItems(facilityes) {
        return facilities().map((name) => (
            <MenuItem
                key={shortid.generate()}
                insetChildren={true}
                checked={facilityes && facilityes.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
        ));
    }

    handleCenterSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({
                isLoading: true
            });

            this.props.createCenterRequest(this.state)
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
        const {errors, isLoading, title, location, facilities, price, capacity} = this.state;
        return (
            <form className="col s12" id="edit-center-form" onSubmit={this.handleCenterSubmit} formEncType="multipart/form-data">
                <div className="row">
                    <div className="col s6">
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Upload</span>
                                <input type="file" name="img_url" onChange={this.onFileChange}
                                       accept="image/jpeg,jpg,png,gif"/>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload an image here"/>
                            </div>
                        </div>
                    </div>
                    <div className="input-field col s6">
                        <InputForm
                            fieldId="title"
                            nameField="title"
                            value={title}
                            error={errors.title || ''}
                            type="text"
                            onChange={this.handleCenterChange}
                            label="Title"
                        />
                    </div>
                </div>
                <div className="row">
                    <SelectField
                        multiple={true}
                        hintText="Select Facilities"
                        value={facilities}
                        onChange={this.handleSelectChange}
                    >
                        {this.menuItems(facilities)}
                    </SelectField>

                    <div className="input-field col s12">
                        <InputForm
                            fieldId="location"
                            nameField="location"
                            value={location}
                            error={errors.location || ''}
                            type="text"
                            onChange={this.handleCenterChange}
                            label="Location"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <InputForm
                            fieldId="price"
                            nameField="price"
                            value={price}
                            error={errors.price || ''}
                            type="number"
                            onChange={this.handleCenterChange}
                            label="Price"
                            minValue="100"
                        />
                    </div>
                    <div className="input-field col s6">
                        <InputForm
                            fieldId="capacity"
                            nameField="capacity"
                            value={capacity}
                            error={errors.capacity || ''}
                            type="number"
                            onChange={this.handleCenterChange}
                            label="Capacity"
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
                            { !isLoading ? "add center" :
                                <img style={{marginTop: "10px"}} src="/image/loader/loading.gif"/> }
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
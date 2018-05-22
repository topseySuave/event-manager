import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import shortid from 'shortid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import TextField from 'material-ui/TextField';
import { teal300 } from 'material-ui/styles/colors';
import InputForm from '../../form/formInput';
import { validateCenterInput } from '../validateInput';
import facilitiesDB from '../../../util/facilities';
import { updateCenterRequest } from '../../../actions/modalAction';
import { EDIT_CENTER } from '../../../actions';

const styles = {
  underlineStyle: {
    borderColor: 'transparent'
  }
};

/**
 * EditCenterForm Class Component
 * */
class EditCenterForm extends Component {
  /**
   * EditCenterForm Class Constructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    /**
     * @Initialize the component's state.
     * */
    this.state = {
      errors: {},
      editCenter: false,
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

  /**
    * componentDidMount Method
    * @Send activeCenter details to updateState method
    * @return { void }
    * */
  componentDidMount() {
    this.updateState(this.props.activeCenter);
  }

  /**
   * @Void: Get the image data and set the img_url in the state
   * to the binary data url.
   * @param { object } e
   * @return { void }
   * * */
  onFileChange(e) {
    let file = e.target.files[0];
    if (file && file.type.indexOf('image/') > -1) { // only image file
      if (file.size < 2000000) { // Must not be more than 2mb
        let reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(file); // read the local file
        reader.onloadend = () => {
          this.setState({
            img_url: file
          });
        };
      } else {
        Materialize.toast('File too large', 5000, 'red');
      }
    } else {
      Materialize.toast('Image files only', 5000, 'red');
    }
  }

  /**
    * @Check if edit center is set to true.
    * and get the keys from center object and populate the state
    * with its appropriate values.
    * updateState Method
    * @param { object } props
    * @return { void }
    * */
  updateState(props) {
    if (props.editCenter) {
      let {
        id, title, img_url, facilities, location, price, capacity, description
      } = props.center;
      this.setState({
        editCenter: true,
        id,
        title,
        img_url,
        facilities,
        location,
        price: price.toString(),
        capacity: capacity.toString(),
        description
      });
    }
  }

  /**
    * handleCenterChange Method
    * @param { object } e
    * @return { void }
    * */
  handleCenterChange(e) {
    if (this.state.errors[e.target.name]) {
      let errors = Object.assign({}, !!this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  /**
    * isValid Method
    * @return { void }
    * */
  isValid() {
    const { errors, isValid } = validateCenterInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
    * handleSelectChange Method
    * @param { object } event
    * @param { string } index
    * @param { array } facilities
    * @return { void }
    * */
  handleSelectChange(event, index, facilities) {
    this.setState({ facilities });
  }

  /**
    * menuItems Method
    * @param { object } facilityes
    * @return { void }
    * */
  menuItems(facilityes) {
    return facilitiesDB().map(name => (
      <MenuItem
        key={shortid.generate()}
        insetChildren
        checked={facilityes && facilityes.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  /**
    * handleCenterSubmit Method
    * @param { object } e
    * @return { void }
    * */
  handleCenterSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({
        isLoading: true
      });

      this.props.updateCenterRequest(this.state);
      // .then((res) => {
      //   console.log(res);
      //   this.setState({ isLoading: false });
      //   if (res.type === EDIT_CENTER) {
      //     Materialize.toast('Center has been updated successfully!!', 5000, 'teal');
      //     location.reload();
      //   } else {
      //     Materialize.toast('Houston, we have a problem! We are working on it', 5000, 'red');
      //   }
      // })
      // .catch(() => {
      //   this.setState({ isLoading: false });
      //   Materialize.toast('Error creating center..!!', 5000, 'red');
      // });
    }
  }

  /**
    * render Method
    * @return { component }
    * */
  render() {
    const {
      editCenter, errors, isLoading, title, location, facilities, price, capacity, description
    } = this.state;

    return (
      <form style={{ marginTop: '20px' }} className="col s12" id="edit-center-form" onSubmit={this.handleCenterSubmit}>
        <div className="row">
          <div className="col s12 m6">
            <div className="file-field input-field">
              <div className="btn">
                <span>Upload</span>
                <input
                  type="file"
                  name="img_url"
                  onChange={this.onFileChange}
                  accept="image/jpeg,jpg,png,gif"
                />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Upload an image here" />
              </div>
            </div>
          </div>
          <div className="input-field col s12 m6">
            <TextField
              id="text-field-controlled"
              hintText="Title"
              value={title}
              name="title"
              errorText={errors.title || ''}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineStyle}
              onChange={this.handleCenterChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6">
            <SelectField
              multiple
              hintText="Select Facilities"
              value={facilities}
              onChange={this.handleSelectChange}
            >
              {this.menuItems(facilities)}
            </SelectField>
          </div>
          <div className="input-field col s12 m6">
            <TextField
              id="text-field-controlled"
              hintText="location"
              value={location}
              name="location"
              errorText={errors.location || ''}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineStyle}
              onChange={this.handleCenterChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6">
            <TextField
              id="text-field-controlled"
              hintText="Price"
              value={price}
              name="price"
              type="number"
              errorText={errors.price || ''}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineStyle}
              onChange={this.handleCenterChange}
            />
          </div>
          <div className="input-field col s12 m6">
            <TextField
              id="text-field-controlled"
              hintText="Capacity"
              value={capacity}
              name="capacity"
              type="number"
              errorText={errors.capacity || ''}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineStyle}
              onChange={this.handleCenterChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <TextField
              hintText="Description"
              value={description}
              name="description"
              errorText={errors.description || ''}
              multiLine
              fullWidth
              onChange={this.handleCenterChange}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineStyle}
              rows={2}
              rowsMax={5}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button
              type="submit"
              id="submitCenterForm"
              name="action"
              className="btn col s12 white-text gradient__bg btn-register waves-effect waves-light"
              disabled={isLoading ? 'disabled' : ''}
            >
              { !isLoading ? 'Save Changes' :
              <img style={{ marginTop: '10px' }} src="/image/loader/loading.gif" alt="save-changes-loader" /> }
            </button>
          </div>
        </div>
      </form>
    );
  }
}

EditCenterForm.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activeCenter: state.activeCenter
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateCenterRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditCenterForm);

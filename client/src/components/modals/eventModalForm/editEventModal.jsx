import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PropTypes } from "prop-types";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import Toggle from 'material-ui/Toggle';

import { editEventAction } from "../../../actions/events-actions";
import InputForm from "../../../components/form/formInput";
import { validateEventInput } from "../validateInput";
import { EDIT_EVENT } from "../../../actions";

const styles = {
  labelStyle: {
    color: 'green',
  }
}

class EditEventModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      disableYearSelection: false,
      isLoading: false,
      errors: {},
      eventId: 0,
      centerId: 0,
      userId: 0,
      title: "",
      img_url: "",
      startDate: null,
      endDate: null,
      description: "",
      private: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  componentDidMount() {
    this.updateState(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.updateState(newProps);
  }

  onFileChange(e) {
    let file = e.target.files[0];
    if (file.type.indexOf("image/") > -1) {
      // only image file
      if (file.size < 2000000) {
        let reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(file); // read the local file
        reader.onloadend = () => {
          this.setState({
            // img_url: reader.result // store image as binary data string
            img_url: file
          });
        };
      } else {
        Materialize.toast("File too large", 5000, "red");
      }
    } else {
      Materialize.toast("Please select only images", 5000, "red");
    }
  }

  isValid() {
    const { errors, isValid } = validateEventInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  removeError(date, dateField){
    let errors = Object.assign({}, !!this.state.errors);
    if(dateField === 'startDate'){
      delete errors.startDate;
      this.setState({
        startDate: new Date(date),
        errors
      });
    } else {
      delete errors.endDate;
      this.setState({
        endDate: new Date(date),
        errors
      });
    }
  }

  handleChangeStartDate(e, date) {
    if (this.state.errors.startDate) {
      this.removeError(date, 'startDate');
    }
    if (new Date(date) < new Date()) {
      Materialize.toast(
        "Date isn't correct. Should be a day after today not before",
        5000,
        "red"
      );
      this.setState({
        startDate: {},
        errors: {
          startDate: 'This field is required'
        }
      });
    } else {
      this.setState({
        startDate: new Date(date)
      });
    }
  }

  handleChangeEndDate(e, date) {
    if (this.state.errors.endDate) {
      this.removeError(date, 'endDate');
    }
    if (new Date(date) < new Date()) {
      Materialize.toast(
        "Date isn't correct. Should be a day after today not before",
        5000,
        "red"
      );
      this.setState({
        endDate: {},
        errors: {
          endDate: 'This field is required'
        }
      });
    } else if (date < this.state.startDate) {
      Materialize.toast(
        "End Date should be after Start Date",
        5000,
        "red"
      );
      this.setState({
        endDate: {},
        errors: {
          endDate: 'This field is required'
        }
      });
    } else {
      this.setState({
        endDate: new Date(date)
      });
    }
  }

  handleInputChange(e) {
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

  handleToggleChange(e){
      this.setState({ private: !this.state.private });
  }

  updateState(newProps) {
    if (newProps.event.editEvent) {
      let {
        title,
        img_url,
        startDate,
        endDate,
        description,
        centerId,
        userId,
        id
      } = newProps.event.eventToEdit;
      let privateEvent = newProps.event.eventToEdit.private;
      this.setState({
        eventId: id,
        centerId,
        userId,
        title,
        img_url,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        description,
        private: privateEvent
      });
      if (!newProps.event.isLoading)
        this.setState({ isLoading: newProps.event.isLoading });
    } else if (newProps.activeCenter.center) {
      this.setState({
        centerId: newProps.activeCenter.center.id,
        userId: newProps.actUser.user.id
      });
    }
  }

  handleEventSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({
        isLoading: true
      });

      this.props.editEventAction(this.state);
    }
  }

  render() {
    let {
      isLoading,
      title,
      description,
      endDate,
      startDate,
      errors
    } = this.state;
    return (
      <div className="row" style={{ marginTop: "20px" }}>
        <form
          className="col s12"
          id="add-event-form"
          onSubmit={this.handleEventSubmit}
        >
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
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Upload an image here"
                  />
                </div>
              </div>
            </div>
            <div className="input-field col s6">
              <TextField
                id="event_field"
                hintText="Title"
                name="title"
                value={title}
                errorText={errors.title || ""}
                multiLine={false}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <DatePicker
                onChange={this.handleChangeStartDate}
                autoOk
                floatingLabelText="Start Date"
                value={startDate}
                disableYearSelection={this.state.disableYearSelection}
              />
              {errors.startDate && (
                <span className="red-text accent-1">{errors.startDate}</span>
              )}
            </div>
            <div className="input-field col s6">
              <DatePicker
                onChange={this.handleChangeEndDate}
                autoOk
                floatingLabelText="End Date"
                value={endDate}
                disableYearSelection={this.state.disableYearSelection}
              />
              {errors.endDate && (
                <span className="red-text accent-1">{errors.endDate}</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="materialize-textarea validate"
                required
                onChange={this.handleInputChange}
                value={description}
              />
            </div>
          </div>
          <div className="row">
              <div className="input-field col s12">
              <Toggle
                  label="Do you want this event to be private?"
                  name="private"
                  defaultToggled={this.state.private}
                  onToggle={this.handleToggleChange}
                  labelStyle={styles.labelStyle}
                  />
              </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button
                type="submit"
                id="editEventForm"
                name="action"
                className="btn col s12 white-text gradient__bg btn-register waves-effect waves-light"
                disabled={isLoading ? "disabled" : ""}
              >
                {!isLoading ? (
                  "update event"
                ) : (
                  <img
                    style={{ marginTop: "10px" }}
                    src="/image/loader/loading.gif"
                    alt="loading gif"
                  />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// EditEventModal.propTypes = {
//   activeCenter: PropTypes.object.isRequired,
//   event: PropTypes.object.isRequired,
//   editEventAction: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  activeCenter: state.activeCenter,
  event: state.eventReducer,
  actUser: state.authReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ editEventAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditEventModal);

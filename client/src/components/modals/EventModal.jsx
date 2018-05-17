/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

import { createEventRequest } from '../../actions/events-actions';
import InputForm from '../../components/form/formInput';
import { validateEventInput } from './validateInput';
import { ADD_EVENT } from '../../actions';

const styles = {
  labelStyle: {
    color: 'green'
  }
};

class EventModal extends Component {
  constructor(props) {
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
      editEvent: false,
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
    this.onFileChange = this.onFileChange.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  updateProps(newProps) {
    if (newProps.editEvent) {
      let {
        title,
        img_url,
        startDate,
        endDate,
        description
      } = newProps.eventToEdit;
      this.setState({
        editEvent: true,
        centerId: newProps.activeCenter.center.id,
        userId: newProps.actUser.user.id,
        title: title,
        img_url: img_url,
        startDate: startDate,
        endDate: endDate,
        description: description
      });
    } else {
      this.setState({
        centerId: newProps.activeCenter.center.id,
        userId: newProps.actUser.user.id
      });
    }
  }

  componentDidMount() {
    this.updateProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.event) this.setState({ isLoading: newProps.event.isLoading });
  }

  isValid() {
    const { errors, isValid } = validateEventInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleChangeStartDate = (e, date) => {
    if (new Date(date) < new Date()) {
      Materialize.toast(
        "Date isn't correct. Should be a day after today not before",
        5000,
        "red"
      );
      this.setState({
        startDate: {}
      });
    } else {
      this.setState({
        startDate: date.toDateString()
      });
    }
  };

  handleChangeEndDate = (e, date) => {
    if (new Date(date) < new Date()) {
      Materialize.toast(
        "Date isn't correct. Should be a day after today not before",
        5000,
        "red"
      );
      this.setState({
        endDate: {}
      });
    } else {
      this.setState({
        endDate: date.toDateString()
      });
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange(e) {
    if (!!this.state.errors[e.target.name]) {
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

  handleToggleChange(e) {
    this.setState({ private: !this.state.private });
  }

  onFileChange(e) {
    let file = e.target.files[0];
    if (file.type.indexOf("image/") > -1) {
      // only image file
      if (file.size < 2000000) {
        this.setState({
          img_url: file
        });
      } else {
        Materialize.toast("File too large", 5000, "red");
      }
    } else {
      Materialize.toast("Image files only please", 5000, "red");
    }
  }

  handleEventSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({
        isLoading: true
      });
      this.props.createEventRequest(this.state);
    }
  }

  render() {
    let {
      isLoading,
      editEvent,
      title,
      description,
      endDate,
      startDate,
      errors
    } = this.state;
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label={
          isLoading ? (
            <img
              style={{ marginTop: "10px" }}
              src="/image/loader/loading.gif"
            />
          ) : (
            "Add Event"
          )
        }
        primary={true}
        keyboardFocused={true}
        onClick={this.handleEventSubmit}
      />
    ];
    return (
      <div>
        <RaisedButton
          label="Book this center"
          primary={true}
          onClick={this.handleOpen}
        />
        <Dialog
          title={editEvent ? "Edit Event" : "Create Event"}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          style={{ marginTop: "0px" }}
        >
          <div className="row" style={{ marginTop: "20px" }}>
            <form className="col s12" id="add-event-form">
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
                  <InputForm
                    type="text"
                    fieldId="event_title"
                    nameField="title"
                    label="Title"
                    value={title}
                    error={errors.title || ""}
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
                    disableYearSelection={this.state.disableYearSelection}
                  />
                  {errors.startDate && (
                    <span className="red-text accent-1">
                      {errors.startDate}
                    </span>
                  )}
                </div>
                <div className="input-field col s6">
                  <DatePicker
                    onChange={this.handleChangeEndDate}
                    autoOk={true}
                    floatingLabelText="End Date"
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
                    type="text"
                    name="description"
                    className="materialize-textarea validate"
                    required
                    onChange={this.handleInputChange}
                    value={description}
                  />
                  {errors.description && (
                    <span className="red-text accent-1">
                      {errors.description}
                    </span>
                  )}
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
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeCenter: state.activeCenter,
    event: state.eventReducer,
    actUser: state.authReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { createEventRequest: createEventRequest },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);

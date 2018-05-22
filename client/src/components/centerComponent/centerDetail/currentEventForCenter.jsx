/* eslint-disable */
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";
import { bindActionCreators } from "redux";
import IconButton from "material-ui/IconButton";
import ActionDone from "material-ui/svg-icons/action/done";
import ContentClear from "material-ui/svg-icons/content/clear";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";

import EventCard from "../../bodyComponents/eventsCard/eventCard";
import { handleStatusEventAction } from "../../../actions/events-actions";

class CurrentEventForCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAlert: false
    };
    
    this.handleAlertOpen = this.handleAlertOpen.bind(this);
    this.handleAlertClose = this.handleAlertClose.bind(this);
  }

  handleAlertOpen() {
    this.setState({ openAlert: true });
  };

  handleAlertClose() {
    this.setState({ openAlert: false });
  };

  showAlertModal(eventId) {
    const actions = [
      <FlatButton
        label="Yes"
        primary={true}
        onClick={() => this.props.handleStatusEventAction(eventId, "rejected")}
      />,
      <FlatButton label="No" primary={true} onClick={this.handleAlertClose} />
    ];

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.state.openAlert}
        onRequestClose={this.handleAlertClose}
      >
        <h5>Are you sure you want to reject this event?</h5>
      </Dialog>
    );
  }

  renderStatusButtons(eventId, status) {
    let closeButton = () => {
      return (
        <a
          className="secondary-content red-text"
          onClick={this.handleAlertOpen}
        >
          <IconButton tooltip="Reject Event" tooltipPosition="top-left">
            <ContentClear color="red" />
          </IconButton>
        </a>
      );
    };

    if (this.props.isAdmin) {
      return (
        <div className="status-btns">
          {status === "pending" ? (
            <span>
              {closeButton()}
              <a
                className="secondary-content"
                onClick={() => this.props.handleStatusEventAction(eventId, "accepted")}
              >
                <IconButton tooltip="Accept Event" tooltipPosition="top-center">
                  <ActionDone color="green" />
                </IconButton>
              </a>
            </span>
          ) : status === "rejected" ? (
            ""
          ) : (
            <span>{closeButton()}</span>
          )}
        </div>
      );
    }
  }

  render() {
    let centerEvents;
    let { events } = this.props;

    if (events.length > 0) {
      centerEvents = events.map(event => {
        return (
          <li
            className="collection-item"
            key={shortid.generate()}
            style={{ fontSize: "13px" }}
          >
            {new Date(event.startDate).toDateString() +
              " - " +
              new Date(event.endDate).toDateString()}
            {this.renderStatusButtons(event.id, event.status)}
            {this.showAlertModal(event.id)}
          </li>
        );
      });
    } else {
      centerEvents = (
        <li className="collection-item" style={{ fontSize: "13px" }}>
          No event for this center
        </li>
      );
    }

    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h6 style={{ fontWeight: "bolder" }}>Dates booked for this Center</h6>
        </li>
        {centerEvents}
      </ul>
    );
  }
}

CurrentEventForCenter.propTypes = {
  events: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleStatusEventAction
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(CurrentEventForCenter);

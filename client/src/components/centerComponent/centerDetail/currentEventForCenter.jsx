import React, { Component } from "react";
import { PropTypes } from "prop-types";
import shortid from "shortid";
import IconButton from "material-ui/IconButton";
import ActionDone from "material-ui/svg-icons/action/done";
import ContentClear from "material-ui/svg-icons/content/clear";

import EventCard from "../../bodyComponents/eventsCard/eventCard";

class CurrentEventForCenter extends Component {
  constructor(props) {
    super(props);
  }

  renderStatusButtons(eventId, status) {
    let closeButton = () => {
      return (
        <a
          className="secondary-content red-text"
          onClick={() => this.props.handleStatusEventAction(eventId, "reject")}
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
                onClick={() =>
                  this.props.handleStatusEventAction(eventId, "accept")
                }
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
  events: PropTypes.array.isRequired,
  handleStatusEventAction: PropTypes.func.isRequired
};

export default CurrentEventForCenter;

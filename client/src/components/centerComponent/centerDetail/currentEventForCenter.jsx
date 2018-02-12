import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';
import EventCard from '../../bodyComponents/eventsCard/eventCard';

class CurrentEventForCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasEvent: false,
      eventArr: []
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.event.length > 0) {
      this.setState({ hasEvent: true, eventArr: newProps });
    }
  }

  showEventCard() {
    if (this.state.hasEvent) {
      let events = this.state.eventArr.event;
      return events.map(event => (
        <EventCard key={shortid.generate()} event={event} />
      ));
    }

    return (
      <span>
        <h5>No event for this center</h5>
        <p>This center is currently open for booking</p>
      </span>
    );
  }

  render() {
    return (
      <div className="col s12 l4">
        <span><h6 className="bold">Events hosted by this center</h6></span>
        <section>
          <div className="row">
            <div className="col s12 l12">
              { this.showEventCard() }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CurrentEventForCenter.propTypes = {
  event: PropTypes.array
};

export default CurrentEventForCenter;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropsTypes } from 'prop-types';

import shortid from 'shortid';
import isEmpty from 'lodash/isEmpty';
import { CircularLoader } from '../loader';
import EventCard from './eventsCard/eventCard';
import {
  fetchEventRequest,
  loadMoreEvents,
  fetchSessionEventRequest
} from './../../actions/events-actions';


  /**
   * MyEventCardHolder Class Component
   * */
export class MyEventCardHolder extends Component {
  /**
   * Class contructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadingmore: null,
      events: []
    };
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */
  componentDidMount() {
    $('.modal').modal();
    this.props.fetchSessionEventRequest(this.props.activeUser.user.id);
  }

  /**
   * componentWillReceiveProps method
   * @param { object } newProps
   * @returns { void }
   * */
  componentWillReceiveProps(newProps) {
    if (newProps.allEvents.sessEvents.events.length > 0) {
      let {
        page, pageCount, pageSize, totalCount, loadingmore, loadmore
      } = newProps.allEvents.sessEvents.meta;
      let { events } = newProps.allEvents.sessEvents;

      this.setState({
        isLoading: false,
        events,
        page,
        pageSize,
        totalCount,
        loadingmore,
        pageCount
      });
    } else {
      this.setState({ isLoading: false });
    }
  }

  /**
   * loadMore method
   * @returns { void }
   * */
  loadMore() {
    /**
     * make loadmore request
     * */
    let offset = this.state.page + 1;
    this.props.loadMoreEvents(this.props.activeUser.user.id, offset);
  }

  /**
   * renderNoEvents method
   * @returns { component }
   * */
  renderNoEvents() {
    let { events } = this.state;
    if (isEmpty(events)) {
      return (
        <h4 className="bold grey-text lighten-2 center-align">
          <p>No Event Available..</p>
        </h4>
      );
    }
  }

  /**
   * renderEventsCard method
   * @returns { component }
   * */
  renderEventsCard() {
    let { events } = this.state;
    if (!isEmpty(events)) {
      return events.map(event => (
        <EventCard key={shortid.generate()} event={event} />
      ));
    }
  }

  /**
   * render method
   * @returns { component }
   * @memberOf MyEventCardHolder
   * */
  render() {
    let {
      isLoading, loadingmore, pageCount, pageSize, totalCount
    } = this.state;
    return (
      <React.Fragment>
        <div
          style={{ minHeight: '90vh', paddingTop: '64px' }}
          className="container popular__events"
        >
          <h4 className="center-align">My Events</h4>
          { (isLoading) ?
            <div style={{ height: '500px', marginTop: '100px' }}>
              <CircularLoader />
            </div>
            :
            <div className="row">
              <div className="col s12 cards-container">
                {this.renderEventsCard()}
              </div>
              {this.renderNoEvents()}
              {
                (pageCount > 1) ?
                  (loadingmore) ? <CircularLoader /> :
                  (pageSize !== totalCount) ?
                    <button
                      onClick={() => this.loadMore()}
                      className="col offset-s3 s6 btn waves-effect gradient__bg"
                    >
                      load more
                    </button> : '' : ''
              }
            </div>
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEventRequest,
  loadMoreEvents,
  fetchSessionEventRequest
}, dispatch);

const mapStateToProps = state => ({
  allEvents: state.eventReducer,
  activeUser: state.authReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(MyEventCardHolder);

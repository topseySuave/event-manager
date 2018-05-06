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

class MyEventCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null,
      events: []
    };
  }

  componentDidMount() {
    this.props.fetchSessionEventRequest(this.props.activeUser.user.id);
  }

  componentWillReceiveProps(newProps) {
    let {
      page, pageCount, pageSize, totalCount, loadingmore, loadmore
    } = newProps.allEvents.sessEvents.meta;
    let { events } = newProps.allEvents.sessEvents;
    //
    this.setState({
      isLoading: false,
      events,
      page,
      pageSize,
      totalCount,
      loadmore,
      loadingmore,
      pageCount
    });
  }

  initInfiniteScroll() {
    let winHeight, winScrollTop, docHeight, offset;
    $(window).scroll(() => {
      winHeight = $(window).height();
      winScrollTop = $(window).scrollTop();
      docHeight = $(document).height();

      if (docHeight - winHeight === winScrollTop) {
        /**
         * make loadmore request
         * */
        offset = this.state.page + 1;
        if (this.state.loadmore) {
          this.props.loadMoreEvents(offset);
        }
      }
    });
  }

  autoLoadMore() {
    if (this.state.loadmore) {
      this.initInfiniteScroll();
    }
  }

  loadMore() {
    /**
     * make loadmore request
     * */
    let offset = this.state.page + 1;
    this.props.loadMoreEvents(offset);
  }

  renderEventsCard() {
    let { events } = this.state;
    return events.map((event) => (
      <EventCard key={shortid.generate()} event={event} />
    ));
  }

  renderNoEvent() {
    let { events } = this.state;
    if (isEmpty(events)) {
      return (
        <h4 className="bold grey-text lighten-2 center-align">
          <p>No Event Available..</p>
        </h4>
      );
    }
  }

  render() {
    this.autoLoadMore();
    let {
      isLoading, loadingmore, pageCount, pageSize, totalCount
    } = this.state;
    return (
      <React.Fragment>
        <div style={{ minHeight: '85vh', paddingTop: '64px' }} className="container popular__events">
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
              {this.renderNoEvent()}
              {
                (pageCount > 1) ?
                  (loadingmore) ? <CircularLoader /> :
                  (pageSize !== totalCount) ?
                    <button onClick={() => this.loadMore()} className="col offset-s3 s6 btn waves-effect gradient__bg">
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

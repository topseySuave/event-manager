import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropsTypes } from 'prop-types';

import shortid from 'shortid';
import isEmpty from 'lodash/isEmpty';
import { CircularLoader } from '../loader';
import EventCard from './eventsCard/eventCard';
import { fetchEventRequest, loadMoreEvents } from './../../actions/events-actions';

/**
   * IndexEventCardHolder Class Component
   * */
class IndexEventCardHolder extends Component {
  /**
   * Class contructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadmore: null,
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
    this.props.fetchEventRequest();
  }

  /**
   * componentWillReceiveProps method
   * @param { object } newProps
   * @returns { void }
   * */
  componentWillReceiveProps(newProps) {
    let {
      events, page, pageCount, pageSize, totalCount, loadingmore, loadmore
    } = newProps.allEvents;

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

  /**
   * initInfiniteScroll method
   * @returns { void }
   * */
  initInfiniteScroll() {
    let winHeight, winScrollTop, docHeight, offset;
    $(window).scroll(() => {
      winHeight = $(window).height();
      winScrollTop = $(window).scrollTop();
      docHeight = $(document).height();

      if (docHeight - winHeight === winScrollTop) {
        /* *
         * make loadmore request
         * */
        offset = this.state.page + 1;
        if (this.state.loadmore) {
          this.props.loadMoreEvents(offset);
        }
      }
    });
  }

  /**
   * autoLoadMore method
   * @returns { void }
   * */
  autoLoadMore() {
    if (this.state.loadmore) {
      this.initInfiniteScroll();
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
    this.props.loadMoreEvents(offset);
  }

  /**
   * renderEventsCard method
   * @returns { void }
   * */
  renderEventsCard() {
    let { events } = this.state;
    return events.map((event, index) => (
      <EventCard key={shortid.generate()} event={event} />
    ));
  }

  /**
   * renderNoEvent method
   * @returns { void }
   * */
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

  /**
   * render method
   * @returns { Component }
   * */
  render() {
    this.autoLoadMore();
    let {
      isLoading, loadingmore, pageCount, pageSize, totalCount
    } = this.state;
    return (
      <div className="popular__events_holdr">
        <div className="container popular__events">
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
                (pageCount > 1) ? (loadingmore) ? <CircularLoader /> : (pageSize !== totalCount) ? <button onClick={() => this.loadMore()} className="col offset-s3 s6 btn waves-effect gradient__bg"> load more </button> : '' : ''
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchEventRequest, loadMoreEvents }, dispatch);

const mapStateToProps = state => ({
  allEvents: state.eventReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexEventCardHolder);

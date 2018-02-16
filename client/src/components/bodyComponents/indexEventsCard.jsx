import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropsTypes } from 'prop-types';

import shortid from 'shortid';
import { CircularLoader } from '../loader';
import EventCard from './eventsCard/eventCard';
import { fetchEventRequest, loadMoreEvents } from './../../actions/events-actions';

class IndexEventCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null,
      events: []
    };
  }

  componentWillMount() {
    this.props.fetchEventRequest();
  }

  componentWillReceiveProps(newProps) {
    let { events, page, pageCount, pageSize, totalCount, loadingmore, loadmore } = newProps.allEvents;

    this.setState({
      isLoading: false,
      events: events,
      page: page,
      pageSize: pageSize,
      totalCount: totalCount,
      loadmore: loadmore,
      loadingmore: loadingmore,
      pageCount: pageCount
    });
  }

  renderEventsCard() {
    let { events } = this.state;
    return events.map((event, index) => (
      <EventCard key={shortid.generate()} event={event} />
    ));
  }

  initInfiniteScroll(){
      let winHeight, winScrollTop, docHeight, offset;
    $(window).scroll(() => {
      winHeight = $(window).height();
      winScrollTop = $(window).scrollTop();
      docHeight = $(document).height();

      if (docHeight - winHeight === winScrollTop){
        /**
         * make loadmore request
         * **/
        offset = this.state.page + 1;
        if(this.state.loadmore)
          this.props.loadMoreEvents(offset);
      }
    });
  }

  autoLoadMore(){
    if(this.state.loadmore){
      this.initInfiniteScroll();
    }
  }

  loadMore(){
    /**
     * make loadmore request
     * **/
    let offset = this.state.page + 1;
    this.props.loadMoreEvents(offset);
  }

  render() {
    this.autoLoadMore();
    let { isLoading, loadingmore, pageCount, pageSize, totalCount } = this.state;
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
              {
                (pageCount > 1)
                  ?
                  (loadingmore)
                    ?
                      <CircularLoader />
                    :
                      (pageSize !== totalCount)
                      ?
                        <button
                          onClick={() => this.loadMore()}
                          className="col offset-s3 s6 btn waves-effect gradient__bg"
                        >
                          load more
                        </button>
                      : ''
                  : ''
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import { PropTypes } from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';
import {
  fetchCentersAction,
  loadMoreCenters
} from '../../actions/center-actions/fetchCenterAction';
import CenterCard from '../centerComponent/centerCard/centerCard';
import { searchAction } from '../../actions/searchAction';
import { CircularLoader } from '../loader';
import Helpers from '../../helpers';
import history from '../../util/history';


/**
   * IndexEventCardHolder Class Component
   * */
class IndexCenterCardHolder extends Component {
  /**
     * Class contructor
     * @param { object } props
     * */
  constructor(props) {
    super(props);
    this.helper = new Helpers();
    this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null
    };
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */
  componentDidMount() {
    $('.modal').modal();
    this.props.fetchCentersAction();
  }

  /**
   * componentWillReceiveProps Method
   * @param { object } newProps
   * @returns { void }
   * */
  componentWillReceiveProps(newProps) {
    let {
        page, pageCount, pageSize, totalCount
      } = newProps.centerStore.meta,
      { loadingmore, loadmore } = newProps.centerStore;

    if (newProps) {
      this.setState({
        isLoading: false,
        page,
        pageSize,
        totalCount,
        loadmore,
        loadingmore,
        pageCount
      });
    }
  }

  /**
   * showCentersCard Method
   * @returns { Component }
   * */
  showCentersCard() {
    let { centers } = this.props.centerStore;
    return centers
      .sort((firstObj, secObj) => secObj.id - firstObj.id)
      .map((center) => {
        let to = `center/${center.id}/${this.helper.sanitizeString(center.title)}`;
        return (
          <CenterCard to={to} center={center} key={shortid.generate()} />
        );
      });
  }

  /**
   * initInfiniteScroll Method
   * @returns { void }
   * */
  initInfiniteScroll() {
    let winHeight, winScrollTop, docHeight, offset;
    $(window).scroll(() => {
      winHeight = $(window).height();
      winScrollTop = $(window).scrollTop();
      docHeight = $(document).height();

      if (docHeight - winHeight === winScrollTop) {
        /**
         * make loadmore request
         * * */
        offset = this.state.page + 1;
        if (this.state.loadmore) {
          this.props.loadMoreCenters(offset);
        }
      }
    });
  }

  /**
   * autoLoadMore Method
   * @returns { void }
   * */
  autoLoadMore() {
    if (this.state.loadmore) {
      this.initInfiniteScroll();
    }
  }

  /**
   * loadMore Method
   * @returns { void }
   * */
  loadMore() {
    /**
     * make loadmore request
     * * */
    let offset = this.state.page + 1;
    this.props.loadMoreCenters(offset);
  }

  /**
   * showLoadMoreButton Method
   * @returns { Component }
   * */
  showLoadMoreButton() {
    const {
      isLoading,
      loadingmore,
      pageCount,
      pageSize,
      totalCount
    } = this.state;

    if (!isLoading && pageCount >= 1) {
      if (loadingmore) {
        return <CircularLoader />;
      }
      if (pageSize !== totalCount) {
        return (
          <button
            onClick={() => this.loadMore()}
            className="col offset-s3 s6 btn waves-effect gradient__bg"
          >
            load more
          </button>
        );
      }
    }
  }

  /**
   * renderNoCenter Method
   * @returns { Component }
   * */
  renderNoCenter() {
    let { centers } = this.props.centerStore;
    if (isEmpty(centers)) {
      return (
        <h4 className="bold grey-text lighten-2 center-align">
          <p>No centers Available....</p>
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
    const { isLoading } = this.state;
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
                {this.showCentersCard()}
              </div>
              {isLoading ? '' : this.renderNoCenter()}
              {this.showLoadMoreButton()}
            </div>
          }
        </div>
      </div>
    );
  }
}

IndexCenterCardHolder.propTypes = {
  fetchCentersAction: PropTypes.func.isRequired,
  centerStore: PropTypes.object.isRequired,
  loadMoreCenters: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchCentersAction, loadMoreCenters, searchAction }, dispatch);

const mapStateToProps = state => ({
  centerStore: state.centerReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexCenterCardHolder);

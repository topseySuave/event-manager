import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import { PropTypes } from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {
  fetchCentersAction,
  loadMoreCenters
} from '../../../actions/center-actions/fetchCenterAction';
import { CircularLoader } from '../../loader';
import Helpers from '../../../helpers';
import SearchFasterForm from './searchFasterForm';

/**
   * AllCenters Class Component
   * */
class AllCenters extends Component {
  /**
   * Class Constructor
   * @param { object } props
   * @returns { void }
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
   * componentDidMount Method
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
          <Link key={shortid.generate()} to={to} href={to}>
            <div className="card">
              {!!center.img_url && (
                <div className="card-image center__image">
                  <img src={center.img_url} alt={center.title} />
                </div>
              )}
              <div className="card-content black-text">
                <div className="row" style={{ marginBottom: '0' }}>
                  <div className="col s12">
                    <p className="bold">{center.title}</p>
                    <p className="light__font">
                      <i className="material-icons f15">location_on</i>
                      {center.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <span className="black-text right-align">
                  capacity of {center.capacity} Guests
                </span>
              </div>
            </div>
          </Link>
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
   * render Method
   * @returns { Component }
   * */
  render() {
    this.autoLoadMore();
    const { isLoading } = this.state;
    return (
      <div className="container">
        <div className="center__holdr">
          <div className="row relative">
            <div className="col s12 l12" style={{ marginBottom: `${60}px` }}>
              <h4 className="center-align">Boots Centers</h4>
              <div className="row">
                {isLoading ? (
                  <CircularLoader />
                ) : (
                  <div className="col s12 cards-container">
                    {this.showCentersCard()}
                  </div>
                )}
                {isLoading ? '' : this.renderNoCenter()}
                {this.showLoadMoreButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AllCenters.propTypes = {
  fetchCentersAction: PropTypes.func.isRequired,
  centerStore: PropTypes.object.isRequired,
  loadMoreCenters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  centerStore: state.centerReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCentersAction, loadMoreCenters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllCenters);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import { PropTypes } from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { fetchCentersAction, loadMoreCenters } from '../../../actions/center-actions/fetchCenterAction';
import { CircularLoader } from '../../loader';
import Helpers from '../../../helpers';
import SearchFasterForm from './searchFasterForm';
// import CenterCard from '../centerCard/centerCard';

class AllCenters extends Component {
  constructor(props) {
    super(props);
    this.helper = new Helpers();
    this.state = {
      isLoading: true,
      loadmore: null,
      loadingmore: null,
    };
  }

  componentWillMount() {
    this.props.fetchCentersAction();
  }

  componentWillReceiveProps(newProps) {
    let {
      centers, page, pageCount, pageSize, totalCount, loadingmore, loadmore
    } = newProps.centerStore;

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

  showCentersCard() {
    let { centers } = this.props.centerStore;
    return centers.map((center) => {
      let to = `center/${center.id}/${this.helper.sanitizeString(center.title)}`;
      return (
        <Link key={shortid.generate()} to={to} href={to}>
          <div className="card">
            {
            !!center.img_url
            &&
            <div className="card-image">
              <img src={center.img_url} alt={center.title} />
            </div>
            }
            <div className="card-content black-text">
              <p className="f__size">{center.title}</p>
              <p><i className="material-icons f15">location_on</i>{center.location}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  renderNoCenter(){
    let { centers } = this.props.centerStore;
    if(isEmpty(centers)){
      return (
        <h4 className="bold grey-text lighten-2 center-align">
          <p>No centers Available..</p>
        </h4>
      )
    }
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
           * * */
        offset = this.state.page + 1;
        if (this.state.loadmore) { this.props.loadMoreCenters(offset); }
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
       * * */
    let offset = this.state.page + 1;
    this.props.loadMoreCenters(offset);
  }

  render() {
    this.autoLoadMore();
    let {
      isLoading, loadingmore, pageCount, pageSize, totalCount
    } = this.state;
    return (
      <div className="container">
        <div className="center__holdr">
          <div className="row relative">
            {/* <div className="col s12 l12 fixed bg__white hide-on-med-and-down"> */}
            {/* <SearchFasterForm /> */}
            {/* </div> */}
            <div className="col s12 l12" style={{ marginBottom: `${60}px` }}>
              <h4 className="center-align">Boots Centers</h4>
              <div className="row">
                { isLoading ? <CircularLoader /> :
                <div className="col s12 cards-container">
                  { this.showCentersCard() }
                </div>
                }
                {this.renderNoCenter()}
                {
                  (isLoading) ? '' : (pageCount > 1) ? (loadingmore) ? <CircularLoader /> : (pageSize !== totalCount) ? <button onClick={() => this.loadMore()} className="col offset-s3 s6 btn waves-effect gradient__bg"> load more </button> : '' : ''
                }
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

const mapDispatchToProps = dispatch => bindActionCreators({ fetchCentersAction, loadMoreCenters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllCenters);

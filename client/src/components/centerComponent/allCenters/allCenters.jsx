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
} from '../../../actions/center-actions/fetchCenterAction';
import { searchAction } from '../../../actions/searchAction';
import CenterCard from '../centerCard/centerCard';
import { CircularLoader } from '../../loader';
import Helpers from '../../../helpers';
import SearchFasterForm from './searchFasterForm';

/**
   * AllCenters Class Component
   * */
export class AllCenters extends Component {
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
      loadingmore: null
    };
    this.onSearch = this.onSearch.bind(this);
  }

  /**
   * componentDidMount Method
   * @returns { void }
   * */
  componentDidMount() {
    $('.modal').modal();
    return this.props.fetchCentersAction();
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
      { loadingmore, loadmore } = newProps.centerStore,
      searchQueries;

    // Run search if URL changes
    if (newProps.location.search !== this.props.location.search) {
      searchQueries = queryString.parse(newProps.location.search);
      this.setState({ isLoading: true });
      this.props.searchAction(searchQueries)
        .then((res) => {
          if (res) this.setState({ isLoading: false });
        });
    }

    if (newProps) {
      this.setState({
        isLoading: false,
        page,
        pageSize,
        totalCount,
        loadingmore,
        pageCount
      });
    }
  }

  /**
   * onSearch Method
   * @param { object } query
   * @returns { void }
   * */
  onSearch(query) {
    const qString = queryString.stringify(query, { arrayFormat: 'bracket' });
    this.props.history.push(`/centers?${qString}`);
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
        let to = `center/${center.id}/${this.helper
          .sanitizeString(center.title)}`;
        return (
          <CenterCard to={to} center={center} key={shortid.generate()} />
        );
      });
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
    const { isLoading } = this.state;
    return (
      <div className="container">
        <div className="center__holdr">
          <div className="row relative">
            <div className="col s12 l12" style={{ marginBottom: `${60}px` }}>
              <h4 className="center-align">Boots Centers</h4>
              <div className="center-align search-faster-form full-width">
                <SearchFasterForm onSearch={this.onSearch} />
              </div>
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
  loadMoreCenters: PropTypes.func.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  centerStore: state.centerReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCentersAction,
    loadMoreCenters,
    searchAction
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllCenters);

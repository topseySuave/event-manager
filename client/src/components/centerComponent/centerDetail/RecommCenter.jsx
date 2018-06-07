import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import isEmpty from 'lodash/isEmpty';

import { CircularLoader } from '../../loader';
import Helpers from '../../../helpers';
import CenterCard from '../centerCard/centerCard';

/**
 * RecommCenter Class Component
 * */
class RecommCenter extends Component {
  /**
   * RecommCenter Class Constructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.helper = new Helpers();
    this.state = {
      isLoading: true,
      error: false,
      noCenter: 'There are no related centers',
      errorMessage: '',
      relatedCenters: []
    };
  }

  /**
   * componentWillMount Method
   * @return { void }
   * */
  componentWillMount() {
    this.fetchCenter(this.props.relatedCenterBasedOn);
  }

  /**
   * componentWillReceiveProps Method
   * @param { object } newProps
   * @return { void }
   * */
  componentWillReceiveProps(newProps) {
    this.fetchCenter(newProps.relatedCenterBasedOn);
  }

  /**
   * fetchCenter Method
   * @param { object } relatedCenters
   * @return { void }
   * */
  fetchCenter(relatedCenters) {
    this.props.fetchCenterRelatedTo(relatedCenters)
      .then(({ data }) => {
        console.log('data ====> ', data);
        this.setState({ isLoading: false, relatedCenters: data.centers });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          error: true,
          errorMessage: this.state.noCenter
        });
      });
  }

  /**
   * sortAndShowRecommended Method
   * @return { component }
   * */
  sortAndShowRecommended() {
    if (!isEmpty(this.state.relatedCenters)) {
      return this.state.relatedCenters.map((center, index) => {
        const to = `/center/${center.id}/${this.helper
          .sanitizeString(center.title)}`;
        return (
          <div className="col s12 l4" key={shortid.generate()}>
            <CenterCard to={to} center={center} />
          </div>
        );
      });
    }
    return (
      <p>{ this.state.noCenter }</p>
    );
  }

  /**
   * render Method
   * @return { component }
   * */
  render() {
    const {
      isLoading, error, errorMessage
    } = this.state;
    const eachCenter = this.sortAndShowRecommended();
    return (
      <div className="row">
        <div className="divider" />
        <h5 style={{ marginLeft: '10px' }}>Recommended Center</h5>
        { isLoading ? <CircularLoader /> : (
          <div className="row">
            { (error) ? errorMessage :
              (isEmpty(eachCenter)) ? this.state.noCenter : eachCenter }
          </div>
        )
        }
      </div>
    );
  }
}

RecommCenter.propTypes = {
  relatedCenterBasedOn: PropTypes.object.isRequired,
  fetchCenterRelatedTo: PropTypes.func.isRequired
};

export default RecommCenter;

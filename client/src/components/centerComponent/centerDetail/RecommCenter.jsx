import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import isEmpty from 'lodash/isEmpty';

import { CircularLoader } from '../../loader';
import Helpers from '../../../helpers';

class RecommCenter extends Component {
  constructor(props) {
    super(props);
    this.helper = new Helpers();
    this.state = {
      isLoading: true,
      error: false,
      noCenter: 'There are no related centers',
      errorMessage: '',
      relatedCenters: [],
      currentCenterId: this.props.relatedCenterBasedOn.id
    };
  }

  fetchCenter(relatedCenters){
    this.props.fetchCenterRelatedTo(relatedCenters)
      .then(({ data }) => {
          this.setState({ isLoading: false, relatedCenters: data.centers });
      })
      .catch(() => {
          this.setState({ isLoading: false, error: true, errorMessage: this.state.noCenter });
      });
  }

  componentWillMount(){
    this.fetchCenter(this.props.relatedCenterBasedOn);
  }

  componentWillReceiveProps(newProps){
    this.fetchCenter(newProps.relatedCenterBasedOn);
  }

  sortAndShowRecommended() {
    if (!isEmpty(this.state.relatedCenters)) {
      return this.state.relatedCenters.map((center, index) => {
      const to = `/center/${center.id}/${this.helper.sanitizeString(center.title)}`;
        return (
          <div key={shortid.generate()} className="col s12 m6 l4">
            <Link to={to} href={to}>
              <div className="card">
                {
                  !!center.img_url
                  &&
                  <div className="card-image center__image">
                    <img src={center.img_url} alt={center.title} />
                  </div>
                }
                <div className="card-content black-text">
                  <p className="bold">{center.title}</p>
                  <p className="light__font"><i className="material-icons f15">location_on</i>{center.location}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
    return (
      <p>{ this.state.noCenter }</p>
    );
  }

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
            { (error) ? errorMessage : (isEmpty(eachCenter)) ? this.state.noCenter : eachCenter }
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

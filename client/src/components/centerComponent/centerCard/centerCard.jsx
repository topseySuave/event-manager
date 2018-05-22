import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Helpers from '../../../helpers';

const helpers = new Helpers();
/**
 * CenterCard Class Component
 * */
class CenterCard extends Component {
  /**
   * class constructor
   * @param {object} props
   * */
  constructor(props) {
    super(props);
    this.helper = new Helpers();
  }

  /**
   * componentWillMount Method
   * @return {void}
   * */
  componentWillMount() {
    $('.modal').modal();
  }

  /**
   * showPriceBar Method
   * @param {string} priceString
   * @return {component}
   * */
  showPriceBar(priceString) {
    return (
      <span className="status-indicator darken-3 transparent-status-bar white-text">
        ₦{helpers.numberWithCommas(priceString)}
      </span>
    );
  }

  /**
   * render Method
   * @return {component}
   * */
  render() {
    const { center } = this.props;
    return (
      <div>
        <Link to={this.props.to} href={this.props.to}>
          <div className="card">
            {this.showPriceBar(center.price)}
            <div className="card-image">
              {(center.img_url) ? (
                <img src={center.img_url} alt={center.title} />
            ) : <img
              src="http://www.topangacreekoutpost.com/assets/images/site/image_not_available.png"
              alt={center.title}
            />
            }
            </div>
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
      </div>
    );
  }
}

CenterCard.propTypes = {
  center: PropTypes.object,
  to: PropTypes.string
};

export default CenterCard;

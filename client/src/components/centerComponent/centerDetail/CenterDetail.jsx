import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import DocumentTitle from 'react-document-title';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

import { CircularLoader } from '../../loader';
import {
  fetchCenterAction,
  editCenterRequestAction
} from '../../../actions/center-actions/activeCenterAction';
import { deleteCenterRequest } from
  '../../../actions/center-actions/deleteCenterAction';
import CurrentEventForCenter from './CurrentEventForCenter';
import RecommCenter from './RecommCenter';
import EventModal from '../../modals/EventModal';
import EditCenterForm from '../../modals/centerModalForms/EditCenterForm';
import { fetchCenterRelatedTo } from
  '../../../actions/center-actions/fetchCenterRelatedTo';
import { handleStatusEventAction } from '../../../actions/events-actions';
import Helpers from '../../../helpers/';
import { imageNotAvailable } from '../../../util/facilities';

const helpers = new Helpers();

/**
 * CenterDetail Class Component
 * */
export class CenterDetail extends Component {
  /**
   * Class constructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      open: false,
      isAdmin: false,
      activeCenter: {
        centr: {
          title: 'center'
        }
      }
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  /**
   * componentDidMount Method
   * @returns { void }
   * */
  componentDidMount() {
    $('.modal').modal('close');
    $('.tooltipped').tooltip({ delay: 50 });
    const { params } = this.props;
    this.props.fetchCenterAction(params.id);
    if (this.props.activeUser.user.role) {
      this.setState({ isAdmin: this.props.activeUser.user.role });
    }
  }

  /**
   * componentWillReceiveProps Method
   * @param { object } newProps
   * @returns { void }
   * */
  componentWillReceiveProps(newProps) {
    let centerDetails = newProps.activeCenterDetail;
    if (centerDetails.eventStatusChange) location.reload();
    if (centerDetails.centerNotFound) this.props.history.push('/404');

    if (this.props.params.id !== newProps.params.id) {
      newProps.fetchCenterAction(newProps.params.id);
    }

    if (typeof centerDetails.center !== 'undefined') {
      if (centerDetails.events) {
        centerDetails.center.events = centerDetails.events;
        delete centerDetails.events;
      }
      this.setState({
        isLoading: false,
        activeCenter: centerDetails
      });
    }
  }

  /**
   * editCenter Method
   * @returns { void }
   * */
  editCenter() {
    this.props.editCenterRequestAction();
  }

  /**
   * handleOpen Method
   * @returns { void }
   * */
  handleOpen() {
    this.props.editCenterRequestAction();
    this.setState({ open: true });
  }

  /**
   * handleClose Method
   * @returns { void }
   * */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * handleAlertOpen Method
   * @returns { void }
   * */
  handleAlertOpen() {
    this.setState({ openAlert: true });
  }

  /**
   * handleAlertClose Method
   * @returns { void }
   * */
  handleAlertClose() {
    this.setState({ openAlert: false });
  }

  /**
   * showEditCenterButton Method
   * @returns { Component }
   * */
  showEditCenterButton() {
    const actions = [
      <FlatButton label="Cancel" primary onClick={this.handleClose} />
    ];

    if (this.state.isAdmin) {
      return (
        <div>
          <FlatButton
            label="Edit center"
            id="editCenterBtn"
            icon={<EditIcon />}
            onClick={this.handleOpen}
            fullWidth
          />
          <Dialog
            title="Edit Center"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent
            style={{ marginTop: '0px' }}
          >
            <EditCenterForm history={this.props.history} />
          </Dialog>
        </div>
      );
    }
  }

  /**
   * showBookCenterButton Method
   * @returns { Component }
   * */
  showBookCenterButton() {
    const isSignedIn = this.props.activeUser.isAuthenticated;
    if (isSignedIn) {
      return <EventModal />;
    }
  }

  /**
   * showRecommendedCenters Method
   * @param { object } relatedCenterBasedOn
   * @returns { Component }
   * */
  showRecommendedCenters(relatedCenterBasedOn) {
    if (!this.state.isAdmin) {
      return (
        <RecommCenter
          relatedCenterBasedOn={relatedCenterBasedOn}
          fetchCenterRelatedTo={fetchCenterRelatedTo}
        />
      );
    }
  }

  /**
   * renderFacilities Method
   * @param { array } facilities
   * @returns { component }
   * */
  renderFacilities(facilities) {
    return facilities.map(facility => (
      <li key={shortid.generate()}>{facility}</li>
    ));
  }

  /**
   * render Method
   * @returns { component }
   * */
  render() {
    let { isLoading, activeCenter, isAdmin } = this.state;
    if (activeCenter.center) {
      const {
        id,
        title,
        img_url,
        location,
        description,
        facilities,
        capacity,
        price,
        events
      } = activeCenter.center;

      let relatedCenterBasedOn = {
        id,
        location,
        facilities,
        capacity,
        price
      };

      return (
        <DocumentTitle title={`${title} | Boots Events Manager`}>
          <div className="container">
            <div className="center__holdr" style={{ minHeight: '100vh' }}>
              <div className="row">
                <div className="col s12 l12">
                  {isLoading && <CircularLoader />}
                  {!isLoading && (
                    <div className="center__details" data-center-id={id}>
                      <h5 style={{ fontWeight: '500' }}>{title}</h5>
                      <div className="slider__holdr">
                        <div className="carousel carousel-slider">
                          <a className="carousel-item" href="#one">
                            {img_url ? (
                              <img src={img_url} alt={title} />
                            ) : (
                              <img
                                src={imageNotAvailable}
                                alt={title}
                              />
                            )}
                          </a>
                        </div>
                      </div>
                      <p>
                        <i className="material-icons f15">location_on</i>{' '}
                        {location}
                      </p>
                      <div className="divider" />
                      <section>
                        <h5>About this Center</h5>
                        <p>{description}</p>
                        <div className="divider" />
                        <div className="row">
                          <div className="col s12 l8">
                            <div className="row">
                              <div className="col s4">
                                <p>Capacity</p>
                              </div>
                              <div className="col s8">
                                <p>{capacity} Guests</p>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="row">
                              <div className="col s4">
                                <p>Price</p>
                              </div>
                              <div className="col s8">
                                <p>
                                  <span>
                                    ₦{helpers.numberWithCommas(price)}
                                  </span>{' '}
                                  per event
                                </p>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="row">
                              <div className="col s4">
                                <p>Facilities</p>
                              </div>
                              <div className="col s8">
                                <ul className="facility__list">
                                  {this.renderFacilities(facilities)}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col s12 l4">
                            <CurrentEventForCenter
                              isAdmin={isAdmin}
                              events={events}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12 l3" id="showEditCenterButton">
                            {this.showEditCenterButton()}
                          </div>
                          <div className="col s12 l6" id="showBookCenterButton">
                            {this.showBookCenterButton()}
                          </div>
                        </div>
                      </section>
                    </div>
                  )}
                </div>
              </div>
              {this.showRecommendedCenters(relatedCenterBasedOn)}
            </div>
          </div>
        </DocumentTitle>
      );
    }
    return '';
  }
}

CenterDetail.propTypes = {
  params: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchCenterRelatedTo: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  activeCenterDetail: state.activeCenter,
  activeUser: state.authReducer
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCenterAction,
      editCenterRequestAction,
      deleteCenterRequest,
      fetchCenterRelatedTo,
      handleStatusEventAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CenterDetail);

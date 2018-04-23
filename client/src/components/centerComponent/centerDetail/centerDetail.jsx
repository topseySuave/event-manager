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
import { fetchCenterAction, editCenterRequestAction } from '../../../actions/center-actions/activeCenterAction';
import { deleteCenterRequest } from '../../../actions/center-actions/deleteCenterAction';
import CurrentEventForCenter from './currentEventForCenter';
import RecommCenter from './RecommCenter';
import EventModal from '../../modals/EventModal';
import EditCenterForm from '../../modals/centerModalForms/editCenterForm';
import { fetchCenterRelatedTo } from '../../../actions/center-actions/fetchCenterRelatedTo';

class CenterDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      openAlert: false,
      open: false,
      openCenterEvents: false,
      activeCenter: {
        centr: {
          title: 'center'
        }
      }
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAlertOpen = this.handleAlertOpen.bind(this);
    this.handleAlertClose = this.handleAlertClose.bind(this);
    this.handleEventsOpen = this.handleEventsOpen.bind(this);
    this.handleEventsClose = this.handleEventsClose.bind(this);
  }

  componentWillMount() {
    $('.tooltipped').tooltip({ delay: 50 });
    const { params } = this.props;
    this.props.fetchCenterAction(params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      newProps.fetchCenterAction(newProps.params.id);
    }

    if (typeof newProps.activeCenterDetail.center !== 'undefined') {
      newProps.activeCenterDetail.center.events = newProps.activeCenterDetail.events;
      if (newProps.activeCenterDetail.center.events) {
        delete newProps.activeCenterDetail.events;
      }
      this.setState({ isLoading: false, activeCenter: newProps.activeCenterDetail });
    }
  }

  editCenter() {
    this.props.editCenterRequestAction();
  }

  handleOpen() {
    this.props.editCenterRequestAction();
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleAlertOpen() {
    this.setState({ openAlert: true });
  }

  handleAlertClose() {
    this.setState({ openAlert: false });
  }

  handleEventsOpen() {
    this.setState({ openCenterEvents: true });
  }

  handleEventsClose() {
    this.setState({ openCenterEvents: false });
  }

  showEditCenterButton() {
    let isAdmin = this.props.activeUser.user.role;
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />
    ];

    if (isAdmin) {
      return (
        <div>
          <FlatButton
            label="Edit center"
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
            <EditCenterForm history={this.props.history}/>
          </Dialog>
        </div>
      );
    }
  }

  showCenterEventsButton(events) {
    const actions = [
      <FlatButton
        label="close"
        primary
        onClick={this.handleEventsClose}
      />
    ];

    return (
      <div>
        <RaisedButton
          label="view Events"
          onClick={this.handleEventsOpen}
          fullWidth
        />
        <Dialog
          title="Events Held by this center"
          actions={actions}
          modal={false}
          open={this.state.openCenterEvents}
          onRequestClose={this.handleEventsClose}
          autoScrollBodyContent
          style={{ marginTop: '-100px' }}
        >
          <CurrentEventForCenter event={events} />
        </Dialog>
      </div>
    );
  }

  showBookCenterButton() {
    const isSignedIn = this.props.activeUser.isAuthenticated;
    if (isSignedIn) {
      return (
        <EventModal />
      );
    }
  }

  showRecommendedCenters(relatedCenterBasedOn){
    const isAdmin = this.props.activeUser.user.role;
    if (!isAdmin) {
      return (
        <RecommCenter
           relatedCenterBasedOn={relatedCenterBasedOn}
           fetchCenterRelatedTo={fetchCenterRelatedTo}
        />
      );
    }
  }

  deleteCenter(id) {
    this.props.deleteCenterRequest(id)
      .then(() => {
        if (typeof this.props.activeCenterDetail.center === 'undefined') {
          Materialize.toast('Center has been Deleted', 5000, 'teal');
          this.props.history.push('/centers');
        }
      });
  }

  showAlertModal(id) {
    let isAdmin = this.props.activeUser.user.role;
    const actions = [
      <FlatButton
        label="Yes"
        primary
        onClick={() => this.deleteCenter(id)}
      />,
      <FlatButton
        label="No"
        primary
        onClick={() => this.handleAlertClose()}
      />,
    ];

    if (isAdmin) {
      return (
        <div>
          <FlatButton
            label="Delete this center"
            secondary
            icon={<Delete />}
            onClick={this.handleAlertOpen}
          />
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.openAlert}
            onRequestClose={this.handleAlertClose}
          >
                        Are you sure you want to delete this event?
          </Dialog>
        </div>
      );
    }
  }

  renderFacilities(facilities) {
    return facilities.map(facility => (
      <li key={shortid.generate()}>{facility}</li>
    ));
  }

  render() {
    let { isLoading, activeCenter } = this.state;
    if (activeCenter.center) {
      const {
        id, title, img_url, location, description, facilities, capacity, price, events
      } = activeCenter.center;

      let relatedCenterBasedOn = {
        id,
        location,
        facilities,
        capacity,
        price
      };

      if (events) {
        events.map((event) => {
          event.center = relatedCenterBasedOn;
        });
      }

      return (
        <DocumentTitle title={`${title} | Boots Events Manager`}>
          <div className="container">
            <div className="center__holdr" style={{ minHeight: '100vh' }}>
              <div className="row">
                <div className="col s12 l12">
                  { isLoading && <CircularLoader /> }
                  { !isLoading &&
                  <div className="center__details" data-center-id={id}>
                    <h5 style={{ fontWeight: '500' }}>{title}</h5>
                    <div className="slider__holdr">
                      <div className="carousel carousel-slider">
                        <a className="carousel-item" href="#one"><img src={img_url} alt={title} /></a>
                      </div>
                    </div>
                    <p><i className="material-icons f15">location_on</i> {location}</p>
                    <div className="divider" />
                    <section>
                      <h5>About this Center</h5>
                      <p>{description}</p>
                      <div className="divider" />
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
                          <p><span>₦{price}</span> per event</p>
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
                      <div className="row">
                        <div className="col s2">{ this.showEditCenterButton() }</div>
                        <div className="col s2">{ this.showAlertModal(id) }</div>
                        <div className="col s4">{ this.showBookCenterButton() }</div>
                        <div className="col s3">{ this.showCenterEventsButton(events) }</div>
                      </div>
                    </section>
                  </div>
                                    }
                </div>
              </div>
              { this.showRecommendedCenters(relatedCenterBasedOn) }
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

const mapStateToProps = state => ({
  activeCenterDetail: state.activeCenter,
  activeUser: state.authReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCenterAction,
  editCenterRequestAction,
  deleteCenterRequest,
  fetchCenterRelatedTo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CenterDetail);

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import DocumentTitle from 'react-document-title';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

import { CircularLoader } from '../../loader';
import { fetchCenterAction, editCenterRequestAction } from '../../../actions/center-actions/activeCenterAction';
import { deleteCenterRequest } from '../../../actions/center-actions/deleteCenterAction';
import { REMOVE_CENTER } from '../../../actions';
import CurrentEventForCenter from './currentEventForCenter';
import RecommCenter from './RecommCenter';
import EventModal from '../../modals/EventModal';
import EditCenterForm from '../../modals/centerModalForms/editCenterForm';

class CenterDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      openAlert: false,
      open: false,
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
  }

  componentWillMount() {
    const { params } = this.props;
    this.props.fetchCenterAction(params.id);
  }

  /* *
     * TODO: modify center details component to update and change the redux store in respond to route change
     * * */
  componentWillReceiveProps(newProps) {
    // const params = this.props.params;
    // this.props.fetchCenterAction(params.id);
    if (newProps.activeCenterDetail) {
      newProps.activeCenterDetail.centr.events = newProps.activeCenterDetail.events;
      if (newProps.activeCenterDetail.centr.events) {
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
            <EditCenterForm />
          </Dialog>
        </div>
      );
    }
  }

  showBookCenterButton() {
    let isSignedIn = this.props.activeUser.isAuthenticated;
    if (isSignedIn) {
      return (
        <EventModal />
      );
    }
  }

  deleteCenter(id) {
    this.props.deleteCenterRequest(id)
      .then((data) => {
        if (data.type === REMOVE_CENTER) {
          window.history.back();
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
    if (activeCenter.centr) {
      let {
        id, title, img_url, location, description, facilities, capacity, price, events
      } = activeCenter.centr;

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
            <div className="center__holdr" style={{ minHeight: '560px' }}>
              <div className="row">
                <div className="col s12 l12">
                  { isLoading && <CircularLoader /> }
                  { !isLoading &&
                  <div className="center__details" data-center-id={id}>
                    <h4>{title}</h4>
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
                          <p>{capacity}</p>
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
                        <div className="col s3">{ this.showEditCenterButton() }</div>
                        <div className="col s5">{ this.showAlertModal(id) }</div>
                        <div className="col s4">{ this.showBookCenterButton() }</div>
                      </div>
                    </section>
                  </div>
                                    }
                </div>
                {/* <CurrentEventForCenter event={events} /> */}
              </div>
              <RecommCenter relatedCenterBasedOn={relatedCenterBasedOn} />
            </div>
          </div>
        </DocumentTitle>
      );
    }
    return '';
  }
}

CenterDetail.propTypes = {
  params: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activeCenterDetail: state.activeCenter,
  activeUser: state.authReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCenterAction,
  editCenterRequestAction,
  deleteCenterRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CenterDetail);

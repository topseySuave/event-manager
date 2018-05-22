import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {
  EditorModeEdit,
  ActionDelete,
  ImageDehaze
} from 'material-ui/svg-icons/';

import {
  deleteEventRequest,
  editEventRequestAction
} from '../../../actions/events-actions';
import EditEventModal from '../../modals/eventModalForm/editEventModal';
import { REMOVE_EVENT } from '../../../actions';
import { imageNotAvailable } from '../../../util/facilities';

/**
   * EventCard Class Component
   * */
class EventCard extends Component {
  /**
   * Class contructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.state = {
      openAlert: false,
      event: {}
    };

    this.handleAlertOpen = this.handleAlertOpen.bind(this);
    this.handleAlertClose = this.handleAlertClose.bind(this);
  }

  /**
   * componentWillMount method
   * @returns { void }
   * */
  componentWillMount() {
    $('.modal').modal();
    $('.tooltipped').tooltip();
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */
  componentDidMount() {
    this.setState({
      event: this.props.event
    });
  }

  /**
   * handleAlertOpen method
   * @returns { void }
   * */
  handleAlertOpen() {
    this.setState({ openAlert: true });
  }

  /**
   * handleAlertClose method
   * @returns { void }
   * */
  handleAlertClose() {
    this.setState({ openAlert: false });
  }

  /**
   * handleEditOpen method
   * @returns { void }
   * */
  handleEditOpen() {
    this.props.editEventRequestAction(this.state.event);
    $('#add_event_modal').modal('open');
  }

  /**
   * handleDelete method
   * @param {string} id
   * @returns { void }
   * */
  handleDelete(id) {
    this.props.deleteEventRequest(id).then((data) => {
      if (data.type === REMOVE_EVENT) {
        this.handleAlertClose();
      }
    });
  }

  /**
   * showMenu method
   * @returns { Component }
   * */
  showMenu() {
    if (this.props.userState.isAuthenticated) {
      return (
        <IconMenu
          className="right-align"
          iconButtonElement={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem
            primaryText="Edit"
            leftIcon={<EditorModeEdit />}
            onClick={() => this.handleEditOpen()}
          />
          <MenuItem
            onClick={() => this.handleAlertOpen()}
            primaryText="Delete"
            style={{ color: 'red' }}
            leftIcon={<ActionDelete />}
          />
        </IconMenu>
      );
    }
  }

  /**
   * showStatusBars method
   * @param {string} status
   * @param {string} statusColor
   * @returns { Component }
   * */
  showStatusBars(status, statusColor) {
    let { userState } = this.props;
    if (
      (userState.isAuthenticated &&
        userState.user.id === this.state.event.userId) ||
      userState.user.role
    ) {
      return (
        <span
          className={classNames(
            'status-indicator',
            'darken-3',
            'white-text',
            statusColor
          )}
        >
          {status}
        </span>
      );
    }
  }

  /**
   * showAlertModal method
   * @param {string} id
   * @returns { Component }
   * */
  showAlertModal(id) {
    const actions = [
      <FlatButton
        label="Yes"
        primary
        onClick={() => this.handleDelete(id)}
      />,
      <FlatButton
        label="No"
        primary
        onClick={() => this.handleAlertClose()}
      />
    ];

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.state.openAlert}
        onRequestClose={this.handleAlertClose}
      >
        Are you sure you want to delete this event?
      </Dialog>
    );
  }

  /**
   * render method
   * @returns { Component }
   * */
  render() {
    let shareColor = ['red', 'blue', 'yellow', 'green'],
      floatBtnColor;
    floatBtnColor = shareColor[Math.floor(Math.random() * shareColor.length)];

    let {
      id,
      title,
      img_url,
      description,
      startDate,
      endDate,
      userId,
      center,
      status
    } = this.state.event;

    startDate = new Date(startDate).toDateString();
    endDate = new Date(endDate).toDateString();

    let displayDate =
      startDate === endDate ? startDate : `${startDate} - ${endDate}`;
    let statusColor =
      status === 'pending'
        ? shareColor[2]
        : status === 'rejected'
          ? shareColor[0]
          : shareColor[3];

    return (
      <div>
        {this.showAlertModal(id)}
        <div className="card" data-id={shortid.generate(id)}>
          <div className="card-image">
            {this.showStatusBars(status, statusColor)}
            {img_url ? (
              <img src={img_url} alt={title} />
            ) : (
              <img
                src={imageNotAvailable}
                alt={title}
              />
            )}
            <span
              className="card-title bold"
              style={{
                right: '0',
                backgroundImage:
                  'linear-gradient(to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'
              }}
            >
              {title}
            </span>
            <a
              className={classNames(
                'btn-floating',
                'activator',
                'halfway-fab',
                'waves-effect',
                'waves-light',
                'tooltipped',
                floatBtnColor
              )}
              data-position="bottom"
              data-tooltip="share"
            >
              <i className="material-icons">dehaze</i>
            </a>
          </div>
          <div className="card-content">
            <p className="small__duration">
              <i className="material-icons f15">schedule</i>
              {displayDate}
            </p>
            <div>
              <i className="material-icons f15">location_on </i>{' '}
              {center
                ? center.location
                : "sorry can't get location at this time"}
              {(this.props.userState.user.id === userId ||
                this.props.userState.user.role) &&
                this.showMenu(id)}
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <a className="bold">{title}</a>
              <i className="material-icons right">close</i>
            </span>
            <p>{description}</p>
            <small>
              <i className="material-icons f15">location_on</i>{' '}
              {center ? center.location : ''}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userState: state.authReducer
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deleteEventRequest,
    editEventRequestAction
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);

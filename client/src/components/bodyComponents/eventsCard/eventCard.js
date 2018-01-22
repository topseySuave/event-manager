import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import shortid from 'shortid'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { EditorModeEdit, ActionDelete } from 'material-ui/svg-icons/'

import { deleteEventRequest } from '../../../actions/events-actions'

class EventCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            event: {},
            location: '',
            userId: ''
        }
    }

    componentDidMount(){
        this.setState({ 
            event: this.props.event
        });
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleDelete(id){
        this.props.deleteEventRequest(id);
    }

    showMenu(){
        if(this.props.userState.isAuthenticated){
            return (
                <IconMenu
                    className="right-align"
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                    <MenuItem
                        primaryText="Edit" 
                        leftIcon={<EditorModeEdit />}
                    />
                    <MenuItem
                        onClick={() => this.handleOpen()}
                        primaryText="Delete"
                        leftIcon={<ActionDelete />}
                    />
                </IconMenu>
            );
        }
    }

    showAlertModal(id){
        const actions = [
            <FlatButton
                label="Yes"
                primary={true}
                onClick={() => this.handleDelete(id)}
            />,
            <FlatButton
                label="No"
                primary={true}
                onClick={() => this.handleClose()}
            />,
        ];

        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                Are you sure you want to delete this event?
            </Dialog>
        );
    }

    render() {
        let shareColor = ['red', 'blue', 'yellow', 'green'];
        shareColor = shareColor[Math.floor((Math.random() * shareColor.length))];

        let { id, title, img_url, description, startDate, endDate, center } = this.state.event;
        startDate = new Date(startDate).toDateString();
        endDate = new Date(endDate).toDateString();

        let displayDate = (startDate === endDate) ? startDate : startDate + ' - ' + endDate;

        return (
            <div>
                {this.showAlertModal(id)}
                <div className="card wow fadeInUp" data-id={shortid.generate(id)}>
                    <div className="card-image">
                        <img src={img_url} alt={title} />
                        <span className="card-title bold" style={{right: '0', backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))'}}>{title}</span>
                        <a className={classNames("btn-floating", "activator", "halfway-fab", "waves-effect", "waves-light", "tooltipped", shareColor) }
                           data-position="bottom" data-tooltip="share">
                            <i className="material-icons">share</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <p className="small__duration">
                            <i className="material-icons f15">schedule</i>
                            { displayDate }
                        </p>
                        <div>
                            <i className="material-icons f15">location_on </i> { (center) ? center.location : '' }
                            { (this.props.userState.user.id === event.userId || this.props.userState.user.role) && this.showMenu(id) }
                        </div>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        <a className="bold">{title}</a>
                        <i className="material-icons right">close</i>
                    </span>
                        <p>{description}</p>
                        <small>{ (center) ? center.location : ''}</small>
                    </div>
                </div>
            </div>
        );
    }
}

EventCard.propTypes = {
    event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        userState: state.authReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteEventRequest: deleteEventRequest}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
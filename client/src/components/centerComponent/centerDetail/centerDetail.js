import React, { Component } from 'react';
import {PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import shortid from 'shortid'
import DocumentTitle from 'react-document-title'

import { CircularLoader } from '../../loader'
import { fetchCenterAction } from '../../../actions/center-actions/activeCenterAction'
import { deleteCenterRequest } from '../../../actions/center-actions/deleteCenterAction'
import { REMOVE_CENTER } from '../../../actions'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/delete'
import CurrentEventForCenter from './currentEventForCenter'
import RecommCenter from './RecommCenter'
import EventModal from '../../modals/EventModal'

class CenterDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            open: false,
            activeCenter: {
                centr: {
                    id: '',
                    title: '',
                    img_url: '',
                    location: '',
                    description: '',
                    facilities: [],
                    capacity: '',
                    price: ''
                }
            }
        }
    }

    componentWillMount() {
        const params = this.props.params;
        this.props.fetchCenterAction(params.id);
    }

    /**
     * TODO: modify center details component to update and change the redux store in respond to route change
     * **/
    componentWillReceiveProps(newProps) {
        if (newProps.activeCenterDetail) {
            // console.log('newly received props: ', newProps.activeCenterDetail);
            this.setState({isLoading: false, activeCenter: newProps.activeCenterDetail});
        }
    }

    renderFacilities(facilities) {
        return facilities.map((facility) => {
            return (
                <li key={shortid.generate()}>{facility}</li>
            );
        });
    }

    editCenter(){

    }

    showEditCenterButton(){
        let isAdmin = this.props.activeUser.user.role;
        if(isAdmin)
            return (
                <div className="col s6">
                    <a href="#edit_center_modal" onClick={this.editCenter}
                       className="center-align modal-trigger btn btn-large waves-effect steel_blue">
                        Edit this center
                    </a>
                </div>
            );
    }

    showBookCenterButton(){
        let isSignedIn = this.props.activeUser.isAuthenticated;
        if(isSignedIn)
            return(
                <EventModal />
            );
    }

    handleAlertOpen = () => {
        this.setState({open: true});
    };

    handleAlertClose = () => {
        this.setState({open: false});
    };

    deleteCenter(id){
        this.props.deleteCenterRequest(id)
            .then((data)=>{
                if(data.type === REMOVE_CENTER){
                    window.history.back();
                }
            });
    }

    showAlertModal(id){
        const actions = [
            <FlatButton
                label="Yes"
                primary={true}
                onClick={() => this.deleteCenter(id)}
            />,
            <FlatButton
                label="No"
                primary={true}
                onClick={() => this.handleAlertClose()}
            />,
        ];

        return (
            <div>
                <FlatButton
                    label="Delete this center"
                    secondary={true}
                    icon={<Delete />}
                    onClick={this.handleAlertOpen}
                />
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleAlertClose}
                >
                    Are you sure you want to delete this event?
                </Dialog>
            </div>
        );
    }

    render() {
        let {isLoading, activeCenter} = this.state;
        if (activeCenter.centr) {
            let {id, title, img_url, location, description, facilities, capacity, price, events} = activeCenter.centr;

            let relatedCenterBasedOn = {
                id,
                location,
                facilities,
                capacity,
                price
            };

            return (
                <DocumentTitle title={title + ' | Boots Events Manager'}>
                    <div className="container">
                        <div className="center__holdr">
                            <div className="row">
                                <div className="col s12 l8">
                                    { isLoading && <CircularLoader /> }
                                    { !isLoading &&
                                    <div className="center__details" data-center-id={id}>
                                        <h4>{title}</h4>
                                        <div className="slider__holdr">
                                            <div className="carousel carousel-slider">
                                                <a className="carousel-item" href="#one"><img src={img_url} alt={title}/></a>
                                            </div>
                                        </div>
                                        <p><i className="material-icons f15">location_on</i> {location}</p>
                                        <div className="divider"></div>
                                        <section>
                                            <h5>About this Center</h5>
                                            <p>{description}</p>
                                            <div className="divider"></div>
                                            <div className="row">
                                                <div className="col s4">
                                                    <p>Capacity</p>
                                                </div>
                                                <div className="col s8">
                                                    <p>{capacity}</p>
                                                </div>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="row">
                                                <div className="col s4">
                                                    <p>Price</p>
                                                </div>
                                                <div className="col s8">
                                                    <p><span>₦{price}</span> per event</p>
                                                </div>
                                            </div>
                                            <div className="divider"></div>
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
                                <CurrentEventForCenter event={events}/>
                            </div>
                            <RecommCenter relatedCenterBasedOn={relatedCenterBasedOn} />
                        </div>
                    </div>
                </DocumentTitle>
            );
        } else {
            return '';
        }
    }
}

CenterDetail.propTypes = {
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        activeCenterDetail: state.activeCenter,
        activeUser: state.authReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchCenterAction: fetchCenterAction,
        deleteCenterRequest: deleteCenterRequest
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CenterDetail);
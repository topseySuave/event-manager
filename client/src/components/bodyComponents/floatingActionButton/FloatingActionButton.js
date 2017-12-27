import React, { Component } from 'react';

class FloatingActionButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }

    componentWillMount(){
        //check if user is signed in with jwt Token
        if(localStorage.getItem('jwtToken')){
            //Change state to set isAuthenticated true
            this.setState({isAuthenticated: true});
        }
    }

    render() {
        if(this.state.isAuthenticated) {
            return (
                <div className="fixed-action-btn wow zoomIn">
                    <a href="#add_event_modal" className="tooltipped modal-trigger btn-large btn-floating green"
                       data-position="top"
                       data-tooltip="Add Event"><i className="material-icons">add</i>
                    </a>
                    <a href="#edit_center_modal"
                       className="tooltipped modal-trigger btn-large btn-floating amber lighten-1" data-position="top"
                       data-tooltip="Add Center"><i className="material-icons">add</i>
                    </a>
                </div>
            );
        }else{
            return '';
        }
    }
}

export default FloatingActionButton;

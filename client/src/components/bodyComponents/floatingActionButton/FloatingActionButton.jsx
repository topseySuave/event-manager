import React, { Component } from 'react';
import { connect } from 'react-redux';

class FloatingActionButton extends Component {
  componentWillMount() {
    $('.modal').modal();
  }

  addCenterButton() {
    return (
      <a
        href="#edit_center_modal"
        className="tooltipped modal-trigger btn-large btn-floating amber lighten-1"
        data-position="top"
        data-tooltip="Add Center"
      ><i className="material-icons">add</i>
      </a>
    );
  }

  render() {
    if (this.props.activeState.isAuthenticated) {
      let userObj = this.props.activeState.user;
      let addCenterButton = (userObj.role) ? this.addCenterButton() : '';

      return (
        <div className="fixed-action-btn wow zoomIn">
          {addCenterButton}
        </div>
      );
    }
    return '';
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

export default connect(mapStateToProps)(FloatingActionButton);

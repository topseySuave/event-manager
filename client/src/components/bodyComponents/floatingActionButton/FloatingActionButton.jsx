import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
   * FloatingActionButton Class Component
   * */
class FloatingActionButton extends Component {
  /**
   * componentWillMount method
   * @returns { void }
   * */
  componentWillMount() {
    $('.modal').modal();
  }

  /**
   * addCenterButton method
   * @returns { void }
   * */
  addCenterButton() {
    return (
      <a
        href="#edit_center_modal"
        className={'tooltipped modal-trigger btn-large' +
          'btn-floating pulse green lighten-1'}
        data-position="top"
        data-tooltip="Add Center"
      ><i className="material-icons">add</i>
      </a>
    );
  }

  /**
   * render method
   * @returns { Component }
   * */
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

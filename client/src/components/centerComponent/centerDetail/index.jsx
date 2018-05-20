import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FixedNav from '../../bodyComponents/headNav/fixedNav';
import CenterDetail from './centerDetail';
import FloatingActionButton from '../../bodyComponents/floatingActionButton/FloatingActionButton';
import Footer from '../../bodyComponents/footer/footer';
import Modals from '../../modals';

/**
 * CenterDetailIndex Class Component
 * */
class CenterDetailIndex extends Component {
  /**
   * showSandWichNavBar Method
   * @returns { component }
   * */
  showSandWichNavBar() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/office.jpg" alt="" />
              </div>
              <a href="#user">
                <img className="circle" src="images/yuna.jpg" alt="" />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
      </div>
    );
  }
  /**
   * render Method
   * @returns { component }
   * */
  render() {
    return (
      <DocumentTitle title="Center Details | Boots Events Manager">
        <div>
          <div className="body__holdr">
            {this.showSandWichNavBar()}
            <FixedNav />
            <CenterDetail
              params={this.props.match.params}
              history={this.props.history}
            />
            <FloatingActionButton />
            <Footer />
          </div>
          <Modals />
        </div>
      </DocumentTitle>
    );
  }
}

export default CenterDetailIndex;

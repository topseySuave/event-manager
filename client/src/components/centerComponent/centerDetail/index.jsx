import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import DocumentTitle from 'react-document-title';
import FixedNav from '../../bodyComponents/headNav/fixedNav';
import CenterDetail from './centerDetail';
import FloatingActionButton from '../../bodyComponents/floatingActionButton/FloatingActionButton';
import Footer from '../../bodyComponents/footer/footer';
import Modals from '../../modals';

class CenterDetailIndex extends Component {
  componentWillMount() {
    $(".button-collapse").sideNav();
  }

  showSandWichNavBar() {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg" alt="" />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li>
                    <div className="divider"/>
                </li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
        </div>
    );
  }

  render() {
    return (
      <DocumentTitle title="Center Details | Boots Events Manager">
        <div>
          <LoadingBar style={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: `${2}px` }} />
          <div className="body__holdr">
            { this.showSandWichNavBar() }
            <FixedNav />
            <CenterDetail params={this.props.match.params} history={this.props.history} />
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

import React, { Component } from 'react';
import Nav from './bodyComponents/headNav/nav';
import HeaderBanner from './bodyComponents/headNav/headbanner';
import IndexCenterCardHolder from './bodyComponents/IndexCenterCardHolder';
import CallToAction from './bodyComponents/footer/CallToAction';
import FloatingActionButton from
  './bodyComponents/floatingActionButton/FloatingActionButton';
import Footer from './bodyComponents/footer/Footer';
import Modals from './modals';

/**
 * HomePage Class Component
 * */
class HomePage extends Component {
  /**
   * @returns { component }
   * */
  render() {
    return (
      <div>
        <div className="body__holdr">
          <Nav />
          <HeaderBanner />
          <IndexCenterCardHolder />
          <CallToAction />
          <FloatingActionButton />
          <Footer />
        </div>
        <Modals />
      </div>
    );
  }
}

export default HomePage;

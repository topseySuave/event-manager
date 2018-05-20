import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FixedNav from '../../bodyComponents/headNav/fixedNav';
import Footer from '../../bodyComponents/footer/footer';
import AllCenters from './allCenters';
import FloatingActionButton from '../../bodyComponents/floatingActionButton/FloatingActionButton';
import Modals from '../../modals';

/**
 * AllCentersIndex Class Component
 * */
class AllCentersIndex extends Component {
  /**
   * render Method
   * @returns { Component }
   * */
  render() {
    return (
      <DocumentTitle title="Centers | Boots Events Manager">
        <div>
          <div className="body__holdr">
            <FixedNav />
            <AllCenters {...this.props} />
            <FloatingActionButton />
            <Footer />
          </div>
          <Modals />
        </div>
      </DocumentTitle>
    );
  }
}

export default AllCentersIndex;

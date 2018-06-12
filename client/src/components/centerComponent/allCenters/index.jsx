import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FixedNav from '../../bodyComponents/headNav/fixedNav';
import Footer from '../../bodyComponents/footer/Footer';
import AllCenters from './AllCenters';
import FloatingActionButton from
  '../../bodyComponents/floatingActionButton/FloatingActionButton';
import Modals from '../../modals';
import history from '../../../util/history';

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
            <AllCenters {...this.props} history={history} />
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

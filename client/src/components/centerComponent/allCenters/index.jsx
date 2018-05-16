import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FixedNav from '../../bodyComponents/headNav/fixedNav';
import AllCenters from './allCenters';
import FloatingActionButton from '../../bodyComponents/floatingActionButton/FloatingActionButton';
import Modals from '../../modals';

class AllCentersIndex extends Component {
  render() {
    return (
      <DocumentTitle title="Centers | Boots Events Manager">
        <div>
          <div className="body__holdr">
            <FixedNav />
            <AllCenters />
            <FloatingActionButton />
          </div>

          <Modals />
        </div>
      </DocumentTitle>
    );
  }
}

export default AllCentersIndex;

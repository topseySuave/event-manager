import React, {Component} from 'react';
import LoadingBar from 'react-redux-loading-bar'
import DocumentTitle from 'react-document-title'
import FixedNav from '../../bodyComponents/headNav/fixedNav'
import AllCenters from './allCenters'
import FloatingActionButton from '../../bodyComponents/floatingActionButton/FloatingActionButton'
import Modals from '../../modals'

class AllCentersIndex extends Component{
    render(){
        return (
            <DocumentTitle title="Centers | Boots Events Manager">
                <div>
                    <LoadingBar styles={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: '2px' }} />

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
import React, {Component} from 'react';
// import LoadingBar from 'react-redux-loading-bar'
import { FixedNav } from '../../bodyComponents/headNav/nav'
import CenterDetail from './centerDetail'
import FloatingActionButton from '../../bodyComponents/floatingActionButton/FloatingActionButton'
import Footer from '../../bodyComponents/footer/footer'
import Modals from '../../modals'

class CenterDetailIndex extends Component{
    render(){
        return (
            <div>
                {/*<LoadingBar style={{ backgroundImage: 'linear-gradient(to top left, rgba(72, 132, 179, 0.7), rgba(144, 236, 146, 0.7))', height: 2 + 'px' }} />*/}
                <div className="body__holdr">
                    <FixedNav />
                    <CenterDetail />
                    <FloatingActionButton />
                    <Footer />
                </div>

                <Modals />
            </div>
        );
    }
}

export default CenterDetailIndex;
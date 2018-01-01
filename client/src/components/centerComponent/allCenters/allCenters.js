import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import shortid from 'shortid'
import CenterCard from '../centerCard/centerCard'
import SearchFasterForm from './searchFasterForm'
import { IndeterminateLoader } from '../../loader'
import { fetchCentersAction } from '../../../actions/fetchCenterAction'


class AllCenters extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentWillMount(){
        this.props.fetchCentersAction()
    }

    componentDidMount(){
        console.log(this.props.centerStore);
        if(this.props.centerStore.centersData){
            this.setState({ isLoading: false });
        }
    }

    showCentersCard(){
        // let centers = this.props.centers.centersData.centers;
        console.log('centers: ', this.props.centerStore.centersData.centers);

        return this.props.centerStore.centersData.centers.map((center)=>{
            console.log('center: ', center);

            return (
                <div key={shortid.generate()} className="col s12 l4">
                    <CenterCard />
                </div>
            );
        });
    }

    render(){
        let { isLoading } = this.state;
        return (
            <div className="container">
                { isLoading && <IndeterminateLoader /> }

                { !isLoading &&
                    <div className="center__holdr">
                        <div className="row relative">
                            <div className="col s12 l12 fixed bg__white hide-on-med-and-down">
                                <SearchFasterForm />
                            </div>
                            <div className="col s12 l12" style={{marginBottom: 60 + 'px'}}>
                                <h4 className="center-align">Boots Centers</h4>
                                <div className="row">
                                    {this.showCentersCard()}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        centerStore: state.centerReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCentersAction: fetchCentersAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCenters);
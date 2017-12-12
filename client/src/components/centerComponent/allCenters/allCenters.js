import React, { Component } from 'react'
import CenterCard from '../centerCard/centerCard'
import SearchFasterForm from './searchFasterForm'

class AllCenters extends Component{
    render(){
        return (
            <div className="container">
                <div className="center__holdr">
                    <div className="row relative">
                        <div className="col s12 l12 fixed bg__white hide-on-med-and-down">
                            <SearchFasterForm />
                        </div>

                        <div className="col s12 l12" style="margin-bottom: 60px;">
                            <h4 className="center-align">Boots Centers</h4>
                            <div className="row">
                                <div className="col s12 l4">
                                    <CenterCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllCenters;
import React, { Component } from 'react'

class SearchFasterForm extends Component{
    render(){
        return (
            <form>
                <div className="row">
                    <div className="input-field col s12 l2">
                        <h6 className="center-align">Search Faster</h6>
                    </div>
                    <div className="input-field col s12 l2">
                        <input id="fast_price" type="number" min="100" className="validate" />
                        <label htmlFor="fast_price">Price</label>
                    </div>
                    <div className="input-field col s12 l4">
                        <input id="fast_capacity" type="range" min="0" max="1000000" className="validate" />
                        <label htmlFor="fast_capacity">Capacity</label>
                    </div>
                    <div className="input-field col s12 l4">
                        <select id="center-filter">
                            <option value="" disabled selected>Choose a Center</option>
                            <option value="1">Muson Center</option>
                            <option value="2">Boots Center</option>
                            <option value="3">Ojo events Center</option>
                        </select>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchFasterForm;
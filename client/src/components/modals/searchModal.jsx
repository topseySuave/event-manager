import React, { Component } from 'react';
import shortid from 'shortid'
import CenterCard from '../centerComponent/centerCard/centerCard'
import EventCard from '../bodyComponents/eventsCard/eventCard'

class SearchModal extends Component {

    render() {
        return (
            <div id="search__modal" className="modal">
                <div className="search__nav z-depth-0">
                    <div className="container">
                        <div className="row">
                            <div className="col s1">
                                <a className="btn btn-flat white waves-effect search__back_btn"><i
                                    className="material-icons search_arrow_back_btn">arrow_back</i></a>
                            </div>
                            <div className="col s11">
                                <nav>
                                    <div className="nav-wrapper">
                                        <form method="post">
                                            <div className="input-field no-margin">
                                                <input id="search" type="search" placeholder="Search by Name and Location" required />
                                                    <label className="label-icon" htmlFor="search"><i className="material-icons search__label">search</i></label>
                                                    <i className="material-icons white-text">close</i>
                                            </div>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search__results">

                    <h5>Center Results</h5>

                    <div className="row">
                        <div key={shortid.generate()} className="col s12 l4">
                            <CenterCard/>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <h5>Events Results</h5>

                    <div className="row">
                        {/*<div key={shortid.generate()}  className="col s12 l4">*/}
                            {/*<EventCard/>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        );
    }
}

export default SearchModal;

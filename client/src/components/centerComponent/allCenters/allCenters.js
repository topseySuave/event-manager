import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import shortid from 'shortid'
import { PropTypes } from 'prop-types'
// import CenterCard from '../centerCard/centerCard'
import SearchFasterForm from './searchFasterForm'
import { fetchCentersAction } from '../../../actions/center-actions/fetchCenterAction'
import Pagination from '../../pagination'
import { CircularLoader } from '../../loader'
import Helpers from '../../../helpers'

class AllCenters extends Component{
    constructor(props){
        super(props);
        this.helper = new Helpers();
        this.state = {
            pageOfItems: [],
            isLoading: true
        }
    }

    componentWillMount(){
        this.props.fetchCentersAction();
    }

    componentWillReceiveProps(newProps){
        if(newProps){
            this.setState({ isLoading: false });
        }
    }

    //TODO: change and modify pageItems for pagination
    /**
     *
     * @param {*} pageOfItems
     * @returns {*} newPage
     */
    onChangePage(pageOfItems) {
        const { centerStore } = this.props;
        // update state with new page of items
        if (pageOfItems) {
            this.setState({ pageOfItems });
        } else {
            this.setState({ pageOfItems: centerStore.centers });
            // console.log('holla');
        }
    }

    showCentersCard(){
        let centers = this.props.centerStore.centers;
        return centers.map((center) => {
            let to = `center/${center.id}/${this.helper.sanitizeString(center.title)}`;
            return (
                <Link key={shortid.generate()} to={to}>
                    <div className="card">
                         {
                             !!center.img_url
                             &&
                             <div className="card-image">
                                 <img src={center.img_url}/>
                             </div>
                         }
                        <div className="card-content black-text">
                        <p className="f__size">{center.title}</p>
                        <p><i className="material-icons f15">location_on</i>{center.location}</p>
                        </div>
                    </div>
                </Link>
            );
        });
    }

    render(){
        let { isLoading, pageOfItems } = this.state;
        return (
            <div className="container">
                <div className="center__holdr">
                    <div className="row relative">
                        <div className="col s12 l12 fixed bg__white hide-on-med-and-down">
                            <SearchFasterForm />
                        </div>
                        <div className="col s12 l12" style={{marginBottom: 60 + 'px'}}>
                            <h4 className="center-align">Boots Centers</h4>
                            <div className="row">
                                { isLoading ? <CircularLoader /> : '' }
                                <div className="col s12 cards-container">
                                    { isLoading ? '' : this.showCentersCard() }
                                </div>
                                {/*<Pagination*/}
                                    {/*items={*/}
                                        {/*pageOfItems*/}
                                    {/*}*/}
                                    {/*onChangePage={this.onChangePage}*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>
                </div>
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
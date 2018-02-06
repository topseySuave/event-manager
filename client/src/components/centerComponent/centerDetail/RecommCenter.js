import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import {Link} from 'react-router-dom'
import shortid from 'shortid'
import isEmpty from 'lodash/isEmpty'

import {fetchCenterRelatedTo} from '../../../actions/center-actions/fetchCenterRelatedTo'
import {CircularLoader} from '../../loader'
import Helpers from '../../../helpers'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import CenterCard from '../centerCard/centerCard'

class RecommCenter extends Component {
    constructor(props) {
        super(props);
        this.helper = new Helpers();
        this.state = {
            isLoading: true,
            error: false,
            errorMessage: '',
            relatedCenters: [],
            currentCenterId: 0
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({currentCenterId: newProps.relatedCenterBasedOn.id});
        fetchCenterRelatedTo(newProps.relatedCenterBasedOn)
            .then(({data}) => {
                if (data.statusCode === 200) {
                    this.setState({isLoading: false, relatedCenters: data.centers});
                } else {
                    this.setState({isLoading: false, error: true, errorMessage: 'There are no related centers'});
                }
            })
            .catch((err)=>{
                // Materialize.toast('Houston we have a problem!! we are working on it', 5000);
                this.setState({isLoading: false, error: true, errorMessage: 'Houston we have a problem!! we are working on it'});
            });
    }

    checkOwnCenter(centerId) {
        return centerId !== this.state.currentCenterId;
    }

    sortAndShowRecommended(relatedCenters){
        if (relatedCenters) {
            return relatedCenters.map((center) => {
                let to = `/center/${center.id}/${this.helper.sanitizeString(center.title)}`;
                if(this.checkOwnCenter(center.id)){
                    return (
                        <div key={shortid.generate()} className="col s12 l4">
                            <Link to={to}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={center.img_url}/>
                                    </div>
                                    <div className="card-content black-text">
                                        <p className="f__size">{center.title}</p>
                                        <p><i className="material-icons f15">location_on</i>{center.location}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                }
            });
        }
    }

    render() {
        let noCenter = 'There are no related centers';
        let {isLoading, error, errorMessage, relatedCenters} = this.state;
        let eachCenter = this.sortAndShowRecommended(relatedCenters);
        return (
            <div className="row">
                <div className="divider"></div>
                <h5>Recommended Center</h5>
                { isLoading && <CircularLoader /> }
                <div className="row">
                    { !isLoading && (error) ? errorMessage : (isEmpty(eachCenter)) ? noCenter : eachCenter }
                </div>
            </div>
        );
    }
}

RecommCenter.propTypes = {
    relatedCenterBasedOn: PropTypes.object.isRequired
};

export default RecommCenter;

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({fetchCenterRelatedTo: fetchCenterRelatedTo}, dispatch);
// };
// export default connect(null, mapDispatchToProps)(RecommCenter);
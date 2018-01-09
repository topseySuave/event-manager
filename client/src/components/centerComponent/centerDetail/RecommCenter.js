import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import {Link} from 'react-router-dom'
import shortid from 'shortid'

import {fetchCenterRelatedTo} from '../../../actions/fetchCenterRelatedTo'
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
            relatedCenters: []
        }
    }

    componentWillReceiveProps(newProps) {
        fetchCenterRelatedTo(newProps.relatedCenterBasedOn)
            .then(({data}) => {
                if (data.statusCode === 200) {
                    this.setState({isLoading: false, relatedCenters: data.centers});
                } else {
                    this.setState({isLoading: false, error: true, errorMessage: 'There are no related centers'});
                }
            });
    }

    render() {
        let {isLoading, error, errorMessage, relatedCenters} = this.state;
        let relatedCenter;

        if (relatedCenters) {
            relatedCenter = relatedCenters.map((center) => {
                let to = `/center-detail/${center.id}/${this.helper.sanitizeString(center.title)}`;
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
            });
        }

        return (
            <div className="row">
                <div className="divider"></div>
                <h5>Recommended Center</h5>
                { isLoading && <CircularLoader /> }
                <div className="row">
                    { !isLoading && (error) ? errorMessage : relatedCenter || 'There are no related centers' }
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
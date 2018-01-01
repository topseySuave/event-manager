import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types'
import Helpers from '../../../helpers'

class CenterCard extends Component {
    constructor(props){
        super(props);
        this.helper = new Helpers();
    }

    render() {
        // let to = `center-detail/${this.props.center.id}/${this.helper.sanitizeString(this.props.center.title)}`;
        return (
            <Link to="">
                <div className="card">

                </div>
            </Link>
        );
    }
}

// CenterCard.propTypes = {
//     center: PropTypes.object.isRequired
// };

export default CenterCard;
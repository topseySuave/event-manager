import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { PropTypes } from 'prop-types'

import Helpers from '../../../helpers'

class CenterCard extends Component {
    constructor(props){
        super(props);
        this.helper = new Helpers();
    }

    componentWillMount(){
        $('.modal').modal();
    }

    render() {
        // let to = `center-detail/${this.props.center.id}/${this.helper.sanitizeString(this.props.center.title)}`;
        return (
            <Link to="/">
                 {/*<div className="card">*/}
                     {/*{this.props.center.id}*/}
                     {/*{*/}
                         {/*!!this.props.center.img_url*/}
                         {/*&&*/}
                         {/*<div className="card-image">*/}
                             {/*<img src={this.props.center.img_url}/>*/}
                         {/*</div>*/}
                     {/*}*/}
                    {/*<div className="card-content black-text">*/}
                        {/*<p className="f__size">{this.props.center.title}</p>*/}
                        {/*<p><i className="material-icons f15">location_on</i>{this.props.center.location}</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </Link>
        );
    }
}

CenterCard.propTypes = {
    center: PropTypes.object
};

export default CenterCard;
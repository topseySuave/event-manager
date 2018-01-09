import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import shortid from 'shortid'

import locations from '../../../util/locations'
import {searchAction} from '../../../actions/searchAction'

class SearchFasterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startSearch: false,
            locations: [],
            price: '',
            capacity: ''
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSearchStart = this.handleSearchStart.bind(this);
    }

    handleSearchChange(e) {
        // if(e.target.name === 'price' && e.target.value > 100){
        //
        // }
        this.setState({[e.target.name]: e.target.value, startSearch: true});
    }

    handleSelectChange = (event, index, locations) => this.setState({locations: locations, startSearch: true});

    handleSearchStart(e) {
        e.preventDefault();
        if (this.state.startSearch) this.props.searchAction(this.state)
    }

    menuItems(location) {
        return locations().map((name) => (
            <MenuItem
                key={shortid.generate()}
                insetChildren={true}
                checked={location && location.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
        ));
    }

    render() {
        let {locations, price, capacity} = this.state;
        return (
            <form onChange={this.handleSearchStart}>
                <div className="row">
                    <div className="input-field col s12 l2">
                        <h6 className="center-align">Search Faster</h6>
                    </div>
                    <div className="input-field col s12 l2">
                        <label htmlFor="fast_price">Price</label>
                        <input
                            id="fast_price"
                            type="number"
                            min="100"
                            name="price"
                            onChange={this.handleSearchChange}
                            value={price || ''}
                            className="validate"
                        />
                    </div>
                    <div className="input-field col s12 l4">
                        <label htmlFor="fast_capacity">Capacity</label>
                        <input
                            id="fast_capacity"
                            type="number"
                            name="capacity"
                            onChange={this.handleSearchChange}
                            min="0"
                            value={capacity || ''}
                            className="validate"
                        />
                    </div>
                    <div className="input-field col s12 l4">
                        <SelectField
                            multiple={true}
                            hintText="Choose a Center"
                            value={locations}
                            onChange={this.handleSelectChange}
                        >
                            {this.menuItems(locations)}
                        </SelectField>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchAction: searchAction}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchFasterForm);
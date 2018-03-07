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
            filterBy: null,
            locations: '',
            price: '',
            capacity: ''
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSearchStart = this.handleSearchStart.bind(this);
    }

    handleSearchChange(e) {
        this.setState({[e.target.name]: e.target.value, startSearch: true});
    }

    handleSelectChange = (event, index, locations) => this.setState({locations: locations, startSearch: true});

    handleFilterChange = (e, index, value) => this.setState({
        filterBy: value,
        startSearch: false,
        locations: '',
        price: '',
        capacity: ''
    });

    handleSearchStart(e) {
        e.preventDefault();
        if (this.state.startSearch) {
            this.props.searchAction(this.state)
                .then((res)=>{
                    if(res) this.setState({startSearch: false});
                });
        }
    }

    //TODO: if search result was successful update centers displayed.
    locationMenuItems(location) {
        return locations().map((name) => (
            <MenuItem
                key={shortid.generate()}
                insetChildren={true}
                checked={location === name && true}
                value={name}
                primaryText={name}
            />
        ));
    }

    filterMenuItems(filterBy) {
        return ['price', 'capacity', 'location'].map((filter) => {
            return (
                <MenuItem
                    key={shortid.generate()}
                    insetChildren={true}
                    checked={filterBy === filter && true}
                    value={filter}
                    primaryText={filter}
                />
            );
        });
    }

    sortByFilter() {
        let {locations, price, capacity, filterBy} = this.state;
        if (filterBy === 'price') {
            return (
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
            );
        } else if (filterBy === 'capacity') {
            return (
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
            );
        } else {
            return (
                <div className="input-field col s12 l4">
                    <SelectField
                        multiple={false}
                        hintText="Choose a Center"
                        value={locations}
                        onChange={this.handleSelectChange}
                    >
                        {this.locationMenuItems(locations)}
                    </SelectField>
                </div>
            );
        }
    }


    render() {
        let {filterBy} = this.state;
        return (
            <form onChange={this.handleSearchStart}>
                <div className="row">
                    <div className="input-field col s12 l3">
                        <SelectField
                            multiple={false}
                            hintText="Filter By: "
                            value={filterBy}
                            onChange={this.handleFilterChange}
                        >
                            {this.filterMenuItems(filterBy)}
                        </SelectField>
                    </div>
                    <div className="input-field col s12 l3">
                        <h6 className="center-align">Search By: {filterBy}</h6>
                    </div>
                    {this.sortByFilter()}
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchAction: searchAction}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchFasterForm);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import shortid from 'shortid';

/**
 * SearchFasterForm Class Component
 * */
class SearchFasterForm extends Component {
  /**
   * SearchFasterForm Class Coonstructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      price: '',
      capacity: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchStart = this.handleSearchStart.bind(this);
  }

  /**
   * handleSearchChange Method
   * @param { object } e
   * @returns { void }
   * */
  handleSearchChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * handleSearchStart Method
   * @param { object } e
   * @returns { void }
   * */
  handleSearchStart(e) {
    e.preventDefault();
    let { location, price, capacity } = this.state;

    // if any of the search queries are provided
    // then run the search function
    if (location || price || capacity) {
      this.props.onSearch(this.state);
    }
  }

  /**
   * render Life cycle Method
   * @returns { component }
   * */
  render() {
    let {
      location, price, capacity
    } = this.state;

    return (
      <form className="col s12 full-width">
        <div className="input-field col s12 l2">
          <label htmlFor="fast_price">Price</label>
          <input
            id="fast_price"
            type="number"
            min="100"
            onChange={this.handleSearchChange}
            name="price"
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
          <label htmlFor="fast_capacity">Location</label>
          <input
            id="fast_location"
            type="text"
            name="location"
            onChange={this.handleSearchChange}
            value={location || ''}
            className="validate"
          />
        </div>
        <div className="input-field col s12 l2">
          <button
            onClick={this.handleSearchStart}
            className="btn gradient__bg"
            type="submit"
          >
            search
          </button>
        </div>
      </form>
    );
  }
}

SearchFasterForm.propTypes = {
  style: PropTypes.object,
  onSearch: PropTypes.func.isRequired
};

export default SearchFasterForm;

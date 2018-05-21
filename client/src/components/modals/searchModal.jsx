import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import EventCard from '../bodyComponents/eventsCard/eventCard';
import CenterCard from '../centerComponent/centerCard/centerCard';
import Helpers from '../../helpers';
import {
  filterCenterTitle,
  filterEventTitle
} from '../../actions/searchAction';

/**
 * SearchModal Class Component
 * */
class SearchModal extends Component {
  /**
   * SearchModal Class Constructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.helper = new Helpers();
    this.state = {
      events: {},
      centers: {}
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  /**
   * componentDidMount method
   * @returns { void }
   * */
  componentDidMount() {
    let search__back_btn = $('.search__back_btn');
    $('.search__back_btn').on('click', () => {
      $('#search__modal').modal('close');
      $('.modal-overlay').css({ display: 'none' });
    });
  }

  /**
   * componentWillReceiveProps Life cycle Method
   * @param { object } newProps
   * @return { object }
   * */
  componentWillReceiveProps(newProps) {
    if (!isEmpty(newProps.centerStore)) {
      let { centers } = newProps.centerStore;
      this.setState({ centers });
    }
    if (!isEmpty(newProps.eventStore)) {
      let { events } = newProps.eventStore;
      this.setState({ events });
    }
  }

  /**
   * handleSearchInput Method
   * @param { object } e
   * @return { void }
   * */
  handleSearchInput(e) {
    let titleString = { search: e.target.value };
    this.props.filterCenterTitle(titleString);
    this.props.filterEventTitle(titleString);
  }

  /**
   * renderEventsCard Method
   * @return { component }
   * */
  renderEventsCard() {
    let { events } = this.state;
    if (!isEmpty(events)) {
      return events.map((event, index) => (
        <EventCard key={shortid.generate()} event={event} />
      ));
    }
    return <h4>No Events</h4>;
  }

  /**
   * renderCenterCard Method
   * @return { component }
   * */
  renderCenterCard() {
    let { centers } = this.state;
    if (!isEmpty(centers)) {
      return centers.map((center) => {
        let to = `/center/${center.id}/${this.helper.sanitizeString(center.title)}`;
        return (
          <CenterCard to={to} center={center} key={shortid.generate()} />
        );
      });
    }
    return <h4>No centers</h4>;
  }

  /**
   * render Method
   * @return { component }
   * */
  render() {
    return (
      <div id="search__modal" className="modal">
        <div className="search__nav z-depth-0">
          <div className="container">
            <div className="row">
              <div className="col s1">
                <a className="btn btn-flat white waves-effect search__back_btn">
                  <i className="material-icons search_arrow_back_btn">
                    arrow_back
                  </i>
                </a>
              </div>
              <div className="col s11">
                <nav>
                  <div className="nav-wrapper">
                    <form method="post">
                      <div className="input-field no-margin">
                        <input
                          className="autocomplete"
                          id="autocomplete-input"
                          type="search"
                          name="searchInput"
                          onChange={this.handleSearchInput}
                          placeholder="Search by Name and Location"
                          required
                        />
                        <label className="label-icon" htmlFor="search">
                          <i className="material-icons search__label">search</i>
                        </label>
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
          <div className="row cards-container">{this.renderCenterCard()}</div>
          <div className="divider" />
          <h5>Events Results</h5>
          <div className="row cards-container">{this.renderEventsCard()}</div>
        </div>
      </div>
    );
  }
}

SearchModal.propTypes = {
  filterCenterTitle: PropTypes.func.isRequired,
  filterEventTitle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  centerStore: state.centerReducer,
  eventStore: state.eventReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterCenterTitle, filterEventTitle }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);

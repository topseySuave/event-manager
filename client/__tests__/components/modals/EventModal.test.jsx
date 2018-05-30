import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { EventModal } from
  '../../../src/components/modals/EventModal.jsx';

// create any initial state needed
const initialState = {};
const mockStore = configureStore();
let wrapper, instance;
let store;

describe('EventModal component', () => {
  let props = {
    activeCenter: { center: { id: 3, title: 'this is me' } },
    event: {},
    actUser: { isAuthenticated: true, user: { id: 3 } },
    bookedCenter: true,
    eventToEdit: {
      title: 'we put the goog in the good life',
      img_url: '',
      startDate: new Date() + 10,
      endDate: new Date() + 20,
      description: 'we put the goog in the good life'
    },
    centerIsBooked: true
  };

  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(initialState);
    wrapper = shallow(<EventModal store={store} {...props} />);
    instance = wrapper.instance();
  });

  test('component should mount', () => {
    instance.componentDidMount(props);
  });

  test('component should receive props and update state', () => {
    instance.componentWillReceiveProps(props);
  });

  test('check if center has been booked and stop all loading process', () => {
    instance.updateProps(props);
  });
});

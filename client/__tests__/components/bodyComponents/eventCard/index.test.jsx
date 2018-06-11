import React from 'react';
import { shallow } from 'enzyme';
import { EventCard } from
  '../../../../src/components/bodyComponents/eventsCard/EventCard';
import {
  deleteEventRequest,
  editEventRequestAction
} from '../../../../src/actions/events-actions';

let wrapper, instance, mounted;
let store, comProps;

const getComponent = (props) => {
  mounted = shallow(<EventCard {...props} />);
  return mounted;
};

describe('EventCard component', () => {
  beforeEach(() => {
    comProps = {
      userState: {
        isAuthenticated: true,
        user: { id: 1, role: false }
      },
      editEventRequestAction,
      deleteEventRequest: jest.fn().mockImplementation(() => Promise.resolve()),
      event: {
        id: 1,
        title: 'this is us',
        img_url: '',
        description: 'a brief description',
        startDate: new Date() + 1,
        endDate: new Date() + 10,
        userId: 1,
        center: { location: 'ikeja' },
        status: 'pending'
      }
    };
    wrapper = getComponent(comProps);
  });

  test('EventCard component should mount', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('event')).toBeTruthy();
  });

  test('should open alert modal', () => {
    wrapper = getComponent(comProps);
    wrapper.instance().handleAlertOpen();
    expect(wrapper.state('openAlert')).toBeTruthy();
  });

  test('should close alert modal', () => {
    wrapper = getComponent(comProps);
    wrapper.instance().handleAlertClose();
    expect(wrapper.state('openAlert')).toBeFalsy();
  });

  test('should be able to open edit event modal', () => {
    wrapper = getComponent(comProps);
    wrapper.instance().handleEditOpen();
  });

  test('should be able to delete an event', () => {
    wrapper = getComponent(comProps);
    wrapper.instance().handleDelete(1);
  });
});

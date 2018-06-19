import React from 'react';
import { shallow, mount } from 'enzyme';
import { EventCard } from
  '../../../../src/components/bodyComponents/eventsCard/EventCard';
import {
  deleteEventRequest,
  editEventRequestAction
} from '../../../../src/actions/events-actions';

let wrapper, instance, mounted;
let store, componentProps;

const getComponent = (props) => {
  mounted = shallow(<EventCard {...props} />);
  return mounted;
};

describe('EventCard component', () => {
  beforeEach(() => {
    componentProps = {
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
        startDate: 'Tue Jun 12 2018',
        endDate: 'Tue Jun 18 2018',
        userId: 1,
        center: { location: 'ikeja' },
        status: 'pending'
      }
    };
    wrapper = getComponent(componentProps);
  });

  test('should always mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('should set the openAlert state true', () => {
    wrapper = getComponent(componentProps);
    wrapper.instance().handleAlertOpen();
    expect(wrapper.state('openAlert')).toBeTruthy();
  });

  test('should set the openAlert state false', () => {
    wrapper = getComponent(componentProps);
    wrapper.instance().handleAlertClose();
    expect(wrapper.state('openAlert')).toBeFalsy();
  });

  test('should be able to open edit event modal', () => {
    wrapper = getComponent(componentProps);
    wrapper.instance().handleEditOpen();
  });

  test('should be able to delete an event', () => {
    wrapper = getComponent(componentProps);
    wrapper.instance().handleDelete(1);
  });
});

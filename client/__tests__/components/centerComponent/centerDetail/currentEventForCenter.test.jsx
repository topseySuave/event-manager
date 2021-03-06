import React from 'react';
import { shallow } from 'enzyme';
import { CurrentEventForCenter, mapDispatchToProps } from
  '../../../../src/components/centerComponent/centerDetail/CurrentEventForCenter'; // eslint-disable-line
import { allEvents } from '../../../__mocks__/actions/eventsMock';
import { handleStatusEventAction } from
  '../../../../src/actions/events-actions/';

describe('CurrentEventForCenter component', () => {
  let props = {
    events: allEvents.events,
    handleStatusEventAction,
    isAdmin: true
  };

  let wrapper = shallow(<CurrentEventForCenter {...props} />);
  let instance = wrapper.instance();

  test('should set opeAlert state true', () => {
    instance.handleAlertOpen();
    expect(wrapper.state('openAlert')).toBeTruthy();
  });

  test('should set opeAlert to false when decline is cancelled', () => {
    instance.handleAlertClose();
    expect(wrapper.state('openAlert')).toBeFalsy();
  });

  test('should have alert modal dialog', () => {
    let h5 = wrapper.find('h5');
    expect(h5.length).toBe(4);
    instance.showAlertModal(5);
  });

  test('should render status button', () => {
    let h5 = wrapper.find('h5');
    expect(h5.length).toBe(4);
    instance.renderStatusButtons(5, 'rejected');
  });

  test('should set centerEvents to "No event for this center"', () => {
    props = {
      events: [],
      handleStatusEventAction,
      isAdmin: true
    };
    wrapper = shallow(<CurrentEventForCenter {...props} />);
    const collectionItem = wrapper.find('.collection-item');
    expect(collectionItem.exists()).toBeTruthy();
    expect(collectionItem.text()).toBe('No event for this center');
  });
});

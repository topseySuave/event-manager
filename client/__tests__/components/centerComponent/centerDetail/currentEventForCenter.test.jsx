import React from 'react';
import { shallow } from 'enzyme';
import { CurrentEventForCenter } from
  '../../../../src/components/centerComponent/centerDetail/CurrentEventForCenter';
import { allEvents } from '../../../__mocks__/actions/eventsMock';
import { handleStatusEventAction } from
  '../../../../src/actions/events-actions/';

describe('CurrentEventForCenter component', () => {
  let props = {
    events: allEvents.events,
    handleStatusEventAction
  };

  const wrapper = shallow(<CurrentEventForCenter {...props} />);
  let instance = wrapper.instance();

  test('component should mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should open alert modal when decline button is clicked', () => {
    instance.handleAlertOpen();
    expect(wrapper.state('openAlert')).toBeTruthy();
  });

  test('should close alert modal when decline is cancelled', () => {
    instance.handleAlertClose();
    expect(wrapper.state('openAlert')).toBeFalsy();
  });

  test('should have alert modal dialog', () => {
    let h5 = wrapper.find('h5');
    expect(h5.length).toBe(4);
    instance.showAlertModal(5);
  });
});

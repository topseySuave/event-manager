import React from 'react';
import { mount } from 'enzyme';
import { store } from '../../../../src/rootReducer';
import { CenterDetail } from
  '../../../../src/components/centerComponent/centerDetail/centerDetail';
import { fetchCenterAction } from
  '../../../../src/actions/center-actions/activeCenterAction';

describe('CenterDetail component', () => {
  const props = {
    params: {},
    history: {},
    activeUser: { user: { role: false } },
    fetchCenterRelatedTo: jest.fn(),
    fetchCenterAction,
    activeCenterDetail: {
      id: 2,
      title: 'this is us',
    }
  };

  const wrapper = mount(<CenterDetail {...props} />);
  const instance = wrapper.instance();
  // console.log('state ===> ', wrapper.state());
  test(
    'should aways receive new properties and admin status should be false',
    () => {
      instance.componentWillReceiveProps(props);
      expect(wrapper.state().isAdmin).toBeFalsy();
    });
});

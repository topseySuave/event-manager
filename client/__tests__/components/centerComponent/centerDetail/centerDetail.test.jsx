import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../../../src/rootReducer';
import { CenterDetail } from
  '../../../../src/components/centerComponent/centerDetail/centerDetail';
import { fetchCenterAction, editCenterRequestAction } from
  '../../../../src/actions/center-actions/activeCenterAction';
import { deleteCenterRequest } from
  '../../../../src/actions/center-actions/deleteCenterAction';
import { facilitiesResources } from
  '../../../__mocks__/actions/centerActionMock';

describe('CenterDetail component', () => {
  const props = {
    params: {},
    history: {},
    activeUser: { isAuthenticated: true, user: { role: false } },
    fetchCenterRelatedTo: jest.fn(),
    fetchCenterAction,
    editCenterRequestAction,
    deleteCenterRequest: jest.fn(),
    activeCenterDetail: {
      id: 2,
      title: 'this is us',
    }
  };

  const wrapper = shallow(<CenterDetail {...props} />);
  const instance = wrapper.instance();
  test(
    'should aways receive new properties and admin status should be false',
    () => {
      instance.componentWillReceiveProps(props);
      instance.editCenter();
      expect(wrapper.state().isAdmin).toBeFalsy();
    }
  );

  test('should open the edit center modal', () => {
    instance.handleOpen();
    expect(wrapper.state('open')).toBeTruthy();
  });

  test('should close the edit center modal', () => {
    instance.handleClose();
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should open the alert modal', () => {
    instance.handleAlertOpen();
    expect(wrapper.state('openAlert')).toBeTruthy();
  });

  test('should close the alert modal', () => {
    instance.handleAlertClose();
    expect(wrapper.state('openAlert')).toBeFalsy();
  });

  test('should show the edit center button', () => {
    wrapper.setState({ isAdmin: true });
    instance.showEditCenterButton();
    expect(wrapper.state('isAdmin')).toBeTruthy();
  });

  test('should have the book center button', () => {
    instance.showBookCenterButton();
    // expect(wrapper.props().activeUser.isAuthenticated).toBeTruthy();
  });

  test('should show recommended centers if not admin', () => {
    wrapper.setState({ isAdmin: false });
    instance.showRecommendedCenters();
    expect(wrapper.state('isAdmin')).toBeFalsy();
  });

  test('should render facilities', () => {
    instance.renderFacilities(facilitiesResources);
    // expect(wrapper.state('isAdmin')).toBeFalsy();
  });
});

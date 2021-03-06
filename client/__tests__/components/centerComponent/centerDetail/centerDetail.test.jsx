import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../../../src/rootReducer';
import { CenterDetail, mapStateToProps, mapDispatchToProps } from
  '../../../../src/components/centerComponent/centerDetail/CenterDetail';
import { fetchCenterAction, editCenterRequestAction } from
  '../../../../src/actions/center-actions/activeCenterAction';
import { facilitiesResources } from
  '../../../__mocks__/actions/centerActionMock';

describe('CenterDetail component', () => {
  const props = {
    params: {},
    history: {
      push() {}
    },
    activeUser: { isAuthenticated: true, user: { role: true } },
    fetchCenterRelatedTo: jest.fn(),
    fetchCenterAction,
    editCenterRequestAction,
    activeCenterDetail: {
      id: 2,
      title: 'this is us',
      eventStatusChange: true,
      centerNotFound: true,
      center: '',
      event: []
    },
  };

  const wrapper = shallow(<CenterDetail {...props} />);
  const instance = wrapper.instance();
  test(
    'should be able to receive new properties and expect admin is true',
    () => {
      wrapper.setProps({
        activeCenterDetail: {
          centerDetails: {
            center: { id: 1 }
          }
        }
      });
      instance.componentWillReceiveProps(props);
      instance.editCenter();
      mapStateToProps({});
      mapDispatchToProps(jest.fn());
      expect(wrapper.state().isAdmin).toBeTruthy();
    }
  );

  test(
    'should set the open state true when handleOpen method is called',
    () => {
      instance.handleOpen();
      expect(wrapper.state('open')).toBeTruthy();
    }
  );

  test('should set the open state false', () => {
    instance.handleClose();
    expect(wrapper.state('open')).toBeFalsy();
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

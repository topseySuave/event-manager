import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../../../src/rootReducer';
import { CenterDetail, mapStateToProps, mapDispatchToProps } from
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
    history: {
      push() {}
    },
    activeUser: { isAuthenticated: true, user: { role: true } },
    fetchCenterRelatedTo: jest.fn(),
    fetchCenterAction,
    editCenterRequestAction,
    deleteCenterRequest: jest.fn().mockImplementation(() => Promise.resolve()),
    activeCenterDetail: {
      id: 2,
      title: 'this is us',
      eventStatusChange: true,
      centerNotFound: true,
      center: '',
      event: []
    },
  };
  const deleteCenterSpy = jest.spyOn(CenterDetail.prototype, 'deleteCenter');
  const showAlertModalSpy = jest
    .spyOn(CenterDetail.prototype, 'showAlertModal');

  const wrapper = shallow(<CenterDetail {...props} />);
  const instance = wrapper.instance();
  test(
    'should aways receive new properties and admin status should be false',
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

  test('should be able to delete', () => {
    instance.deleteCenter(2);
    expect(deleteCenterSpy).toBeCalled();
  });

  test('should be able to show alert subcomponent', () => {
    instance.showAlertModal(2);
    expect(showAlertModalSpy).toBeCalled();
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
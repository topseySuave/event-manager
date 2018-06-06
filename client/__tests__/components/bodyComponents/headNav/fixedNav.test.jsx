import React from 'react';
import { shallow } from 'enzyme';
import { FixedNav, mapStateToProps, matchDispatchToProps } from
  '../../../../src/components/bodyComponents/headNav/fixedNav';

let wrapper, instance, mounted;
let store, comProps;

const getComponent = (props) => {
  mounted = shallow(<FixedNav {...props} />);
  return mounted;
};

const showModalSpy = jest
  .spyOn(FixedNav.prototype, 'showModal');
const showAuthenticationLinksSpy = jest
  .spyOn(FixedNav.prototype, 'showAuthenticationLinks');
const renderSidenavSpy = jest.spyOn(FixedNav.prototype, 'renderSidenav');

describe('FixedNav component', () => {
  beforeEach(() => {
    let props = {
      history: {
        push() {}
      },
      activeState: {
        isAuthenticated: true,
        user: { lastName: 'thomas' }
      }
    };
    wrapper = getComponent(props);
  });
  test('component should mount', () => {
    mapStateToProps({});
    matchDispatchToProps(jest.fn());
    expect(wrapper).toMatchSnapshot();
  });

  test('should toggle side bar', () => {
    wrapper.instance().handleToggle();
    expect(wrapper.state('open')).toBeTruthy();
  });

  test('handleClose side nav close', () => {
    wrapper.instance().handleClose();
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should be able to show modal', () => {
    wrapper.instance().showModal();
    expect(showModalSpy).toBeCalled();
  });

  test('should be able to show modal', () => {
    wrapper.instance().renderSidenav();
    expect(renderSidenavSpy).toBeCalled();
  });

  test('should show authentication links if not signed in', () => {
    let props = {
      history: {
        push() {}
      },
      activeState: {
        isAuthenticated: false,
        user: { lastName: 'thomas' }
      }
    };
    wrapper = getComponent(props);
    wrapper.instance().showAuthenticationLinks();
    expect(showAuthenticationLinksSpy).toBeCalled();
  });
});

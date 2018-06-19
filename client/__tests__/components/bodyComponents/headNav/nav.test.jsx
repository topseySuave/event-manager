import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, matchDispatchToProps } from
  '../../../../src/components/bodyComponents/headNav/nav';

let wrapper, instance, mounted;
let store, componentProps;

const getComponent = (props) => {
  mounted = shallow(<Nav {...props} />);
  return mounted;
};

describe('Nav component', () => {
  beforeEach(() => {
    componentProps = {
      activeState: {
        isAuthenticated: true,
        user: { lastname: 'thomas' }
      }
    };
    wrapper = getComponent(componentProps);
  });

  test('should have a snapshot of the component', () => {
    mapStateToProps({});
    matchDispatchToProps(jest.fn());
    expect(wrapper).toMatchSnapshot();
  });

  test('on render open state should be false', () => {
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should open sidenav toggle when state `open` is true', () => {
    wrapper.instance().handleToggle();
    expect(wrapper.state('open')).toBeTruthy();
  });

  test('sidenav should be closed when state `open` is false', () => {
    wrapper.instance().handleClose();
    wrapper.instance().showModal();
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should show showAuthenticationLinks when not logged in', () => {
    componentProps = {
      activeState: {
        isAuthenticated: false,
        user: { }
      }
    };
    wrapper = getComponent(componentProps);
    wrapper.instance().showAuthenticationLinks();
    expect(wrapper.state('open')).toBeFalsy();
  });
});

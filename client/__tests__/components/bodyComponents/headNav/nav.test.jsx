import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, matchDispatchToProps } from
  '../../../../src/components/bodyComponents/headNav/nav';

let wrapper, instance, mounted;
let store, comProps;

const getComponent = (props) => {
  mounted = shallow(<Nav {...props} />);
  return mounted;
};

const componentDidMountSpy = jest.spyOn(Nav.prototype, 'componentDidMount');

describe('Nav component', () => {
  beforeEach(() => {
    comProps = {
      activeState: {
        isAuthenticated: true,
        user: { lastname: 'thomas' }
      }
    };
    wrapper = getComponent(comProps);
  });
  test('Nav component should mount', () => {
    mapStateToProps({});
    matchDispatchToProps(jest.fn());
    expect(wrapper).toMatchSnapshot();
    expect(componentDidMountSpy).toBeCalled();
  });

  test('render should be called', () => {
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should handle sidenav toggle', () => {
    wrapper.instance().handleToggle();
    expect(wrapper.state('open')).toBeTruthy();
  });

  test('should handle sidenav close and show modal', () => {
    wrapper.instance().handleClose();
    wrapper.instance().showModal();
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should show showAuthenticationLinks when not logged in', () => {
    comProps = {
      activeState: {
        isAuthenticated: false,
        user: { }
      }
    };
    wrapper = getComponent(comProps);
    wrapper.instance().showAuthenticationLinks();
    expect(wrapper.state('open')).toBeFalsy();
  });
});

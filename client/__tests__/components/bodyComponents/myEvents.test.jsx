import React from 'react';
import { shallow } from 'enzyme';
import { MyEvents } from
  '../../../src/components/bodyComponents/MyEvents';

let wrapper, instance, mounted;
let store, comProps;

const getComponent = (props) => {
  mounted = shallow(<MyEvents {...props} />);
  return mounted;
};

describe('MyEvents component', () => {
  test('MyEvents component should mount', () => {
    comProps = {
      activeState: {
        isAuthenticated: true
      }
    };
    wrapper = getComponent(comProps);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('isAuthenticated')).toBeTruthy();
  });

  test('render should be called', () => {
    comProps = {
      activeState: {
        isAuthenticated: false
      }
    };
    wrapper = getComponent(comProps);
    expect(wrapper.state('isAuthenticated')).toBeFalsy();
  });
});

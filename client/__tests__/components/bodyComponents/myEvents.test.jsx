import React from 'react';
import { shallow } from 'enzyme';
import { MyEvents } from
  '../../../src/components/bodyComponents/MyEvents';

let wrapper, instance, mounted;
let store, componentProps;

const getComponent = (props) => {
  mounted = shallow(<MyEvents {...props} />);
  return mounted;
};

describe('MyEvents component', () => {
  test('should be mounted when a user is authenticated', () => {
    componentProps = {
      activeState: {
        isAuthenticated: true
      }
    };
    wrapper = getComponent(componentProps);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('isAuthenticated')).toBeTruthy();
  });

  test('shoukld expect unauthorized user', () => {
    componentProps = {
      activeState: {
        isAuthenticated: false
      }
    };
    wrapper = getComponent(componentProps);
    expect(wrapper.state('isAuthenticated')).toBeFalsy();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { FloatingActionButton, mapStateToProps } from
  '../../../../src/components/bodyComponents/floatingActionButton/FloatingActionButton'; // eslint-disable-line

let wrapper, instance, mounted;
let store, componentProps;

const getComponent = (props) => {
  mounted = shallow(<FloatingActionButton {...props} />);
  return mounted;
};

const componentWillMountSpy = jest
  .spyOn(FloatingActionButton.prototype, 'componentWillMount');

describe('FloatingActionButton component', () => {
  test('should mount', () => {
    componentProps = {
      activeState: {
        isAuthenticated: true,
        user: { id: 1, role: true }
      }
    };
    wrapper = getComponent(componentProps);
    expect(wrapper).toMatchSnapshot();
    expect(componentWillMountSpy).toBeCalled();
  });

  test('should render nothing when user not authenticated', () => {
    componentProps = {
      activeState: {
        isAuthenticated: false
      }
    };
    wrapper = getComponent(componentProps);
    mapStateToProps({});
    expect(wrapper.html()).toBeFalsy();
  });
});

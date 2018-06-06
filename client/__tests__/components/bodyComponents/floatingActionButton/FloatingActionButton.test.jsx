import React from 'react';
import { shallow } from 'enzyme';
import { FloatingActionButton, mapStateToProps } from
  '../../../../src/components/bodyComponents/floatingActionButton/FloatingActionButton'; // eslint-disable-line

let wrapper, instance, mounted;
let store, comProps;

const getComponent = (props) => {
  mounted = shallow(<FloatingActionButton {...props} />);
  return mounted;
};

const componentWillMountSpy = jest
  .spyOn(FloatingActionButton.prototype, 'componentWillMount');

describe('FloatingActionButton component', () => {
  test('FloatingActionButton component should mount', () => {
    comProps = {
      activeState: {
        isAuthenticated: true,
        user: { id: 1, role: true }
      }
    };
    wrapper = getComponent(comProps);
    expect(wrapper).toMatchSnapshot();
    expect(componentWillMountSpy).toBeCalled();
  });

  test('should render nothing', () => {
    comProps = {
      activeState: {
        isAuthenticated: false
      }
    };
    wrapper = getComponent(comProps);
    mapStateToProps({});
  });
});

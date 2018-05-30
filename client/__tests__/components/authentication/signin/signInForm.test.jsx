import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { SignInForm, matchDispatchToProps } from
  '../../../../src/components/authentication/signin/SignInForm';
import { userSignInRequest } from '../../../../src/actions/authActions';

const mountComp = (props, userSignInReq, history) => {
  const options = new ReactRouterEnzymeContext();
  let wrapper = mount(
    <SignInForm
      activeState={props}
      userSignInRequest={userSignInReq}
      history={history}
    />,
    options.get()
  );
  return wrapper;
};

describe('Sign In form component', () => {
  const locations = [];
  const history = {
    push(location) {
      locations.push(location);
    },
  };
  const props = {
    isAuthenticated: false
  };

  test('should required field exist', () => {
    let wrapper = mountComp(props, userSignInRequest, history);
    const instance = wrapper.instance();
    const email = wrapper.find('#email');
    const password = wrapper.find('#password');
    const signinForm = wrapper.find('#signin-form');
    expect(email.exists()).toBeTruthy();
    expect(password.exists()).toBeTruthy();
  });

  test('should validate all props', () => {
    props.isAuthenticated = true;
    let wrapper = mountComp(props, userSignInRequest, history);
    const instance = wrapper.instance();
    matchDispatchToProps(jest.fn());
    expect(wrapper.props().activeState.isAuthenticated).toBeTruthy();
    expect(wrapper.props().userSignInRequest).toBeTruthy();
    expect(wrapper.props().history).toBeTruthy();
  });

  test(
    'should test for invalid inputs and set the state to have errors',
    () => {
      props.isAuthenticated = false;
      let wrapper = mountComp(props, userSignInRequest, history);
      const instance = wrapper.instance();
      wrapper.setState({ email: '', password: '' });
      wrapper.find('#email').simulate(
        'change',
        {
          target:
        { name: 'email', value: 'bl' }
        }
      );

      wrapper.find('#password').simulate(
        'change',
        {
          target:
         { name: 'password', value: 'ca' }
        }
      );

      wrapper.find('#signin-form').simulate(
        'submit',
        { preventDefault() {} }
      );

      expect(wrapper.state().errors.email).toBe('Email is invalid');
      expect(wrapper.state().errors.password)
        .toBe('Password is too short, Must be more than 6 characters');
    }
  );
});

import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { SignInForm, mapStateToProps, matchDispatchToProps } from
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

const handleChangeSpy = jest.spyOn(SignInForm.prototype, 'handleChange');

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

  test('should check if required fields exist', () => {
    let wrapper = mountComp(props, userSignInRequest, history);
    mapStateToProps({});
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
    'should check for invalid inputs',
    () => {
      props.isAuthenticated = false;
      let wrapper = mountComp(props, userSignInRequest, history);
      wrapper.setState({ email: '', password: '' });
      wrapper.find('#email').at(0).simulate(
        'change',
        {
          target:
        { name: 'email', value: 'bl' }
        }
      );

      wrapper.find('#password').at(0).simulate(
        'change',
        {
          target:
         { name: 'password', value: 'ca' }
        }
      );

      wrapper.find('#signin-form').at(0).simulate(
        'submit',
        { preventDefault() {} }
      );

      expect(wrapper.state().errors.email).toBe('Email is invalid');
      expect(wrapper.state().errors.password)
        .toBe('This field is required');
    }
  );

  test('should set fields value in state', () => {
    let wrapper = mountComp(props, userSignInRequest, history);
    wrapper.setState({
      errors: {
        email: 'this field is required'
      }
    });
    const instance = wrapper.instance();
    const e = {
      target: {
        name: 'email',
        value: 'gabriel@micah.com'
      }
    };
    instance.handleChange(e);
    expect(handleChangeSpy).toBeCalled();
  });

  test('should handle changes in the form', () => {
    let wrapper = mountComp(props, userSignInRequest, history);
    wrapper.setState({
      errors: {}
    });
    const instance = wrapper.instance();
    const e = {
      target: {
        name: 'email',
        value: 'gabriel@micah.com'
      }
    };
    instance.handleChange(e);
    expect(handleChangeSpy).toBeCalled();
  });
});

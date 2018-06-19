import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapDispatchToProps } from
  '../../../../src/components/authentication/signup/SignUp';
import { userSignupRequest } from '../../../../src/actions/authActions';

describe('SignUp component', () => {
  test('when user is authenticated', () => {
    let props = { isAuthenticated: true };
    const wrapper = shallow(<SignUp activeState={props} />);
    const renderSpy = jest
      .spyOn(SignUp.prototype, 'render');
    const instance = wrapper.instance();
    wrapper.setState({ isAuthenticated: true });
    instance.render();
    expect(wrapper.state().isAuthenticated).toBeTruthy();
    expect(renderSpy).toHaveBeenCalled();
  });

  test('when user is not authenticatedd', () => {
    let props = { isAuthenticated: false };
    const wrapper = shallow(<SignUp activeState={props} />);
    const renderSpy = jest
      .spyOn(SignUp.prototype, 'render');
    const instance = wrapper.instance();
    wrapper.setState({ isAuthenticated: false });
    instance.render();
    mapDispatchToProps(jest.fn());
    expect(wrapper.state().isAuthenticated).toBeFalsy();
    expect(renderSpy).toHaveBeenCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from
  '../../../../src/components/authentication/signup/SignUpForm';
import { userSignupRequest } from '../../../../src/actions/authActions';

describe('Authentication Sign Up form', () => {
  const wrapper = shallow(<SignUpForm userSignupRequest={userSignupRequest} />);
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: 'firstName',
      value: 'Gabriel'
    }
  };

  test('component should render to the dom', () => {
    const divs = wrapper.find('div');
    const renderSpy = jest
      .spyOn(SignUpForm.prototype, 'render');
    const instance = wrapper.instance();
    instance.render();
    expect(divs.length).toBeGreaterThan(5);
    expect(renderSpy).toHaveBeenCalled();
  });

  test('elements should be present', () => {
    const form = wrapper.find('form');
    expect(form.length).toEqual(1);
  });

  test('should render all input fields', () => {
    const InputForm = wrapper.find('InputForm');
    expect(InputForm.length).toEqual(5);
  });

  test(
    'should test sign up component handleChange if there is no error',
    () => {
      const divs = wrapper.find('div');
      const instance = wrapper.instance();
      wrapper.setState({
        errors: { firstName: '' }
      });
      instance.handleChange(event);
      expect(divs.length).toBe(10);
    }
  );

  test(
    'should test sign up component handleChange if there is an error',
    () => {
      const divs = wrapper.find('div');
      const instance = wrapper.instance();
      wrapper.setState({
        errors: { firstName: 'this field is invalid' }
      });
      instance.handleChange(event);
      expect(divs.length).toBe(10);
    }
  );

  test('should test isValid method', () => {
    const divs = wrapper.find('div');
    const instance = wrapper.instance();
    instance.isValid();
    expect(divs.length).toBe(10);
  });

  test('should test handleSubmit method', () => {
    const divs = wrapper.find('div');
    const instance = wrapper.instance();
    instance.handleSubmit(event);
    expect(divs.length).toBe(10);
  });

  test('component rendered again with redirect', () => {
    const renderSpy = jest
      .spyOn(SignUpForm.prototype, 'render');
    wrapper.setState({
      redirect: true
    });
    const instance = wrapper.instance();
    instance.render();
    expect(renderSpy).toHaveBeenCalled();
  });
});

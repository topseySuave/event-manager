import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import SignIn from
  '../../../../src/components/authentication/signin/SignIn';

describe('Authentication Sign In Component', () => {
  const options = new ReactRouterEnzymeContext();
  let wrapper = shallow(<SignIn />);
  test('should make a snapshot of the SignIn component', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });

  test('should always render the header and footer component', () => {
    const AuthHeader = wrapper.find('AuthHeader');
    expect(AuthHeader.length).toBe(1);
    const AuthFooter = wrapper.find('AuthFooter');
    expect(AuthFooter.length).toBe(1);
    const signinCardHolder = wrapper.find('.signin__card_holdr');
    expect(signinCardHolder.exists()).toBeTruthy();
  });
});

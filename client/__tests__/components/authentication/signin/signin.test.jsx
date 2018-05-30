import React from 'react';
import { shallow } from 'enzyme';
import SignIn from
  '../../../../src/components/authentication/signin/signin';

describe('Authentication Sign In Component', () => {
  const wrapper = shallow(<SignIn />);
  test('make a snapshot of the SignIn component', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });
});

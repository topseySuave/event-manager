import React from 'react';
import { shallow } from 'enzyme';
import AuthHeader from
  '../../../src/components/authentication/AuthHeader';

describe('Authentication Header Component', () => {
  const wrapper = shallow(<AuthHeader />);
  test('make a snapshot of the AuthHeader component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

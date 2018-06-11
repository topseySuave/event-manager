import React from 'react';
import { shallow } from 'enzyme';
import AuthFooter from
  '../../../src/components/authentication/AuthFooter';

describe('Authentication footer Component', () => {
  const wrapper = shallow(<AuthFooter />);
  test('make a snapshot of the AuthFooter component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

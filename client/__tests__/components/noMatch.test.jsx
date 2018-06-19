import React from 'react';
import { mount, shallow } from 'enzyme';
import NoMatch from
  '../../src/components/NoMatch';

describe('Loader', () => {
  const wrapper = shallow(<NoMatch />);
  test('should have a snapshot of the NoMatch component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

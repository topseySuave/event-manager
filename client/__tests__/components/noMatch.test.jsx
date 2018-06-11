import React from 'react';
import { mount, shallow } from 'enzyme';
import NoMatch from
  '../../src/components/NoMatch';

describe('Loader Component', () => {
  const wrapper = shallow(<NoMatch />);
  test('make a snapshot of the NoMatch component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

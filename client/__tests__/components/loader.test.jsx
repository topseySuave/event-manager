import React from 'react';
import { mount, shallow } from 'enzyme';
import { CircularLoader, IndeterminateLoader } from
  '../../src/components/loader';

describe('Loader Component', () => {
  const circularLoader = shallow(<CircularLoader />);
  const indeterminateLoader = shallow(<IndeterminateLoader />);
  test('should make a snapshot of the CircularLoader component', () => {
    expect(circularLoader).toMatchSnapshot();
  });

  test('should make a snapshot of the IndeterminateLoader component', () => {
    expect(indeterminateLoader).toMatchSnapshot();
  });
});

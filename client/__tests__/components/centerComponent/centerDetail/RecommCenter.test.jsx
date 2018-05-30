import React from 'react';
import { shallow } from 'enzyme';
import RecommCenter from
  '../../../../src/components/centerComponent/centerDetail/RecommCenter';
import { fetchCenterRelatedTo } from
  '../../../../src/actions/center-actions/fetchCenterRelatedTo';
import { centers } from '../../../__mocks__/actions/centerActionMock';

describe('RecommCenter component', () => {
  let props = {
    relatedCenterBasedOn: { id: 3, title: 'this is us' },
    fetchCenterRelatedTo
  };

  const wrapper = shallow(<RecommCenter {...props} />);
  let instance = wrapper.instance();

  test(
    'componentWillReceiveProps should fetch center related to the current one',
    () => {
      instance.componentWillReceiveProps(props);
    }
  );

  test(
    'sortAndShowRecommended should sort the centers related centers array',
    () => {
      wrapper.setState({
        relatedCenters: centers.centers
      });
      instance.sortAndShowRecommended();
    }
  );
});

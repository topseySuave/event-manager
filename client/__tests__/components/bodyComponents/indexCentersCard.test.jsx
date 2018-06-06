import React from 'react';
import { shallow } from 'enzyme';
import { IndexCenterCardHolder, mapStateToProps, mapDispatchToProps } from
  '../../../src/components/bodyComponents/indexCentersCard';
import {
  fetchCentersAction,
  loadMoreCenters
} from '../../../src/actions/center-actions/fetchCenterAction';

let wrapper, instance, mounted;
let store, comProps;

const getComponent = (props) => {
  mounted = shallow(<IndexCenterCardHolder {...props} />);
  return mounted;
};

let LoadMoreSpy = jest.spyOn(IndexCenterCardHolder.prototype, 'loadMore');

describe('IndexCenterCardHolder component', () => {
  test('IndexCenterCardHolder component should mount', () => {
    comProps = {
      fetchCentersAction,
      centerStore: {
        centers: [],
      },
      loadMoreCenters
    };
    wrapper = getComponent(comProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('component should update', () => {
    comProps.centerStore = {
      centers: [],
      loadingmore: true,
      loadmore: true,
      meta: {
        page: 2,
        pageCount: 2,
        pageSize: 5,
        totalCount: 6
      }
    };
    wrapper = getComponent(comProps);
    wrapper.setProps(comProps);
    expect(wrapper.state('isLoading')).toBeFalsy();
  });

  test('should show the loadmore button', () => {
    wrapper = getComponent(comProps);
    wrapper.setState({
      isLoading: false,
      pageCount: 2
    });
    wrapper.instance().showLoadMoreButton();
  });

  test('should be able to loadmore', () => {
    wrapper = getComponent(comProps);
    mapDispatchToProps(jest.fn());
    mapStateToProps({});
    wrapper.instance().loadMore();
    expect(LoadMoreSpy).toBeCalled();
  });
});

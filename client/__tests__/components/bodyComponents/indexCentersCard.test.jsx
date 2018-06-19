import React from 'react';
import { shallow } from 'enzyme';
import { IndexCenterCardHolder, mapStateToProps, mapDispatchToProps } from
  '../../../src/components/bodyComponents/IndexCenterCardHolder';
import {
  fetchCentersAction,
  loadMoreCenters
} from '../../../src/actions/center-actions/fetchCenterAction';

let wrapper, instance, mounted;
let store, componentProps;

const getComponent = (props) => {
  mounted = shallow(<IndexCenterCardHolder {...props} />);
  return mounted;
};

let LoadMoreSpy = jest.spyOn(IndexCenterCardHolder.prototype, 'loadMore');

describe('IndexCenterCardHolder component', () => {
  test('should mount', () => {
    componentProps = {
      fetchCentersAction,
      centerStore: {
        centers: [],
      },
      loadMoreCenters
    };
    wrapper = getComponent(componentProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('should update when new properties a provided', () => {
    componentProps.centerStore = {
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
    wrapper = getComponent(componentProps);
    wrapper.setProps(componentProps);
    expect(wrapper.state('isLoading')).toBeFalsy();
  });

  test('should show the loadmore button', () => {
    wrapper = getComponent(componentProps);
    wrapper.setState({
      isLoading: false,
      pageCount: 2
    });
    wrapper.instance().showLoadMoreButton();
  });

  test('should be able to loadmore', () => {
    wrapper = getComponent(componentProps);
    mapDispatchToProps(jest.fn());
    mapStateToProps({});
    wrapper.instance().loadMore();
    expect(LoadMoreSpy).toBeCalled();
  });
});

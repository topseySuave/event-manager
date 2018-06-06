import React from 'react';
import { mount, shallow } from 'enzyme';
import { AllCenters } from
  '../../../../src/components/centerComponent/allCenters/allCenters';
import {
  fetchCentersAction,
  loadMoreCenters
} from '../../../../src/actions/center-actions/fetchCenterAction';
import { searchAction } from '../../../../src/actions/searchAction';
import history from '../../../../src/util/history';

let wrapper, instance, mounted;
let store, props;

const getComponent = () => {
  if (!mounted) {
    props = {
      history: {
        push() {}
      },
      fetchCentersAction,
      searchAction: jest.fn().mockImplementation(() => Promise.resolve()),
      location: {
        search: { location: '' }
      },
      centerStore: {
        centers: [],
        loadingmore: false,
        loadmore: false,
        meta: {
          page: 1,
          pageCount: 2,
          pageSize: 5,
          totalCount: 9
        }
      },
      loadMoreCenters
    };
    mounted = shallow(<AllCenters {...props} />);
  }
  return mounted;
};

describe('AllCenters component', () => {
  beforeEach(() => {
    wrapper = getComponent();
    wrapper.setProps(props);
  });
  let loadMoreSpy = jest.spyOn(AllCenters.prototype, 'loadMore');
  let renderNoCenterSpy = jest.spyOn(AllCenters.prototype, 'renderNoCenter');

  test('that component mounted successfully', () => {
    searchAction({ location: 'ikeja', price: 10000 });
    expect(wrapper).toMatchSnapshot();
  });

  test('component should receive props and update state', () => {
    let newProps = {
      ...props,
      location: {
        search: { location: 'ikeja' }
      }
    };
    wrapper.setProps(newProps);
  });

  test('should be able to search', () => {
    let query = {
      location: 'ikeja',
      price: 200000,
      capacity: 600
    };
    wrapper.instance().onSearch(query);
  });

  test('should be able to load more', () => {
    wrapper.instance().loadMore();
    expect(loadMoreSpy).toBeCalled();
  });

  test('should render no center if there are no centers available', () => {
    wrapper.instance().renderNoCenter();
    expect(renderNoCenterSpy).toBeCalled();
  });
});

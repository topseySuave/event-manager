import React from 'react';
import { shallow } from 'enzyme';
import { HeaderBanner, mapStateToProps, matchDispatchToProps } from
  '../../../../src/components/bodyComponents/headNav/headbanner';

let wrapper, instance, mounted;
let store, comProps;

const getComponent = (props) => {
  mounted = shallow(<HeaderBanner {...props} />);
  return mounted;
};

const componentDidMountSpy = jest
  .spyOn(HeaderBanner.prototype, 'componentDidMount');
const onScrollToShowNavSpy = jest
  .spyOn(HeaderBanner.prototype, 'onScrollToShowNav');
const showAuthenticationLinksSpy = jest
  .spyOn(HeaderBanner.prototype, 'showAuthenticationLinks');
const showModalSpy = jest
  .spyOn(HeaderBanner.prototype, 'showModal');

describe('HeaderBanner component', () => {
  beforeEach(() => {
    let props = {
      history: {
        push() {}
      },
      activeState: {
        isAuthenticated: true,
        user: { lastName: 'thomas' }
      }
    };
    wrapper = getComponent(props);
  });
  test('should have a snpashot', () => {
    mapStateToProps({});
    matchDispatchToProps(jest.fn());
    expect(wrapper).toMatchSnapshot();
  });

  test('when onSearch is called', () => {
    const query = { location: 'ikeja' };
    wrapper.instance().onSearch(query);
  });

  test('when onScrollToShowNav is called', () => {
    wrapper.instance().onScrollToShowNav();
    expect(onScrollToShowNavSpy).toBeCalled();
  });

  test('should set open state false', () => {
    wrapper.instance().handleClose();
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should set open state true', () => {
    wrapper.instance().handleToggle();
    expect(wrapper.state('open')).toBeTruthy();
  });

  test('should be able to call showModal method', () => {
    wrapper.instance().showModal();
    expect(showModalSpy).toBeCalled();
  });

  test('should show authentication links if not signed in', () => {
    let props = {
      history: {
        push() {}
      },
      activeState: {
        isAuthenticated: false,
        user: { lastName: 'thomas' }
      }
    };
    wrapper = getComponent(props);
    wrapper.instance().showAuthenticationLinks();
    expect(showAuthenticationLinksSpy).toBeCalled();
  });
});

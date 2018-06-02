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
  test('component should mount', () => {
    mapStateToProps({});
    matchDispatchToProps(jest.fn());
    expect(wrapper).toMatchSnapshot();
  });

  test('onSearch is called', () => {
    const query = { location: 'ikeja' };
    wrapper.instance().onSearch(query);
  });

  test('onScrollToShowNavSpy is called', () => {
    wrapper.instance().onScrollToShowNav();
    expect(onScrollToShowNavSpy).toBeCalled();
  });

  test('handleClose side nav close', () => {
    wrapper.instance().handleClose();
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should toggle side bar', () => {
    wrapper.instance().handleToggle();
    expect(wrapper.state('open')).toBeTruthy();
  });

  test('should be able to show modal', () => {
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

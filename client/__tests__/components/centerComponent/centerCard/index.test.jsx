import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import CenterCard from
  '../../../../src/components/centerComponent/centerCard/CenterCard';

describe('CenterCard component', () => {
  const options = new ReactRouterEnzymeContext();
  let props = {
    to: '/home',
    center: { id: 3, title: 'never enough', price: 100000 }
  };
  const wrapper = mount(<CenterCard {...props} />, options.get());
  test('should always mount', () => {
    const divs = wrapper.find('div');
    const Link = wrapper.find('Link');
    const card = wrapper.find('.card');
    expect(divs.length).toBeGreaterThan(5);
    expect(Link.exists()).toBeTruthy();
    expect(card.exists()).toBeTruthy();
  });

  test('should render the price section of the card', () => {
    const priceSection = wrapper
      .find('.status-indicator.darken-3.transparent-status-bar.white-text');
    expect(priceSection.exists()).toBeTruthy();
    expect(priceSection.text()).toBe('₦100,000');
  });
});

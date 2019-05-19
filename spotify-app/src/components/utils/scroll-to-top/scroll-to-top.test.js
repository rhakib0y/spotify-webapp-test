import React from 'react';
import { shallow } from 'enzyme';
import ScrollToTop from './scroll-to-top';

describe('<ScrollToTop />', () => {
  test('renders', () => {
    const wrapper = shallow(<ScrollToTop />);
    expect(wrapper).toMatchSnapshot();
  });
});

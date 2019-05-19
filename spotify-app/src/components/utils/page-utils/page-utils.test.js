import React from 'react';
import { shallow } from 'enzyme';
import PageUtils from './page-utils';

describe('<PageUtils />', () => {
  test('renders', () => {
    const wrapper = shallow(<PageUtils />);
    expect(wrapper).toMatchSnapshot();
  });
});

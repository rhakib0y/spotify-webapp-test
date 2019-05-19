import React from 'react';
import { shallow } from 'enzyme';
import ShowLoadingWait from './show-loading-wait';

describe('<ShowLoadingWait />', () => {
  test('renders', () => {
    const wrapper = shallow(<ShowLoadingWait />);
    expect(wrapper).toMatchSnapshot();
  });
});

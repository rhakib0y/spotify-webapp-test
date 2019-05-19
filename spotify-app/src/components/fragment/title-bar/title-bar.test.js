import React from 'react';
import { shallow } from 'enzyme';
import TitleBar from './title-bar';

describe('<TitleBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<TitleBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

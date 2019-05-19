import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './search-bar';

describe('<SearchBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

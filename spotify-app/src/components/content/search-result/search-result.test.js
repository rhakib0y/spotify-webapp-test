import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './search-result';

describe('<SearchResult />', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchResult />);
    expect(wrapper).toMatchSnapshot();
  });
});

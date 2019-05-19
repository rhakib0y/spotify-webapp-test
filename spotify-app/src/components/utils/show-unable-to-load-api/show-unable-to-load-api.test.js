import React from 'react';
import { shallow } from 'enzyme';
import ShowUnableToLoadApi from './show-unable-to-load-api';

describe('<ShowUnableToLoadApi />', () => {
  test('renders', () => {
    const wrapper = shallow(<ShowUnableToLoadApi />);
    expect(wrapper).toMatchSnapshot();
  });
});

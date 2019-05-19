import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './app-router';

describe('<AppRouter />', () => {
  test('renders', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });
});

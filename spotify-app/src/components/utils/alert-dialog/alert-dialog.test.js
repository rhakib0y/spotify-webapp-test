import React from 'react';
import { shallow } from 'enzyme';
import AlertDialog from './alert-dialog';

describe('<AlertDialog />', () => {
  test('renders', () => {
    const wrapper = shallow(<AlertDialog />);
    expect(wrapper).toMatchSnapshot();
  });
});

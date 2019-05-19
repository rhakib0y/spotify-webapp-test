import React from 'react';
import { shallow } from 'enzyme';
import ArtistDetails from './artist-details';

describe('<ArtistDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<ArtistDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});

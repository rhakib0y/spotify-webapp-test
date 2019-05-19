import React from 'react';
import { shallow } from 'enzyme';
import AlbumCard from './album-card';

describe('<AlbumCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<AlbumCard />);
    expect(wrapper).toMatchSnapshot();
  });
});

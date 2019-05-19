import React from 'react';
import { shallow } from 'enzyme';
import AlbumByArtist from './album-by-artist';

describe('<AlbumByArtist />', () => {
  test('renders', () => {
    const wrapper = shallow(<AlbumByArtist />);
    expect(wrapper).toMatchSnapshot();
  });
});

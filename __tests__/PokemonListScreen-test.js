import React from 'react';
import renderer from 'react-test-renderer';
import PokemonListScreen from '../src/screens/PokemonListScreen';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn()
    }),
  };
});

jest.mock('react-redux', () => {
  const actualNav = jest.requireActual('react-redux');
  return {
    ...actualNav,
    useDispatch: () => ({}),
    useSelector: () => ({})
  };
});

test('renders correctly', () => {
  const tree = renderer.create(<PokemonListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import PokemonDetailScreen from '../src/screens/PokemonDetailScreen';

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

  const mockedParams = {
    route: { params: {
      item: {
        default_img:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/'
            }
          }
        ]
      },
      number: 1
    } },
    navigation: ''
  };
  const tree = renderer.create(<PokemonDetailScreen {...mockedParams}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

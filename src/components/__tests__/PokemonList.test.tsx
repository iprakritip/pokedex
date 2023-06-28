import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import {GET_ALL_POKEMONS} from '../../api/hooks';
import PokemonList from '../PokemonList';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

// const mockedUseContext = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: () => ({searchInput: 'saur'})
}));
describe('Pokemon List', () => {
  const mocks = [
    {
      request: {
        query: GET_ALL_POKEMONS,
        variables: {
          offset: 0,
        },
      },
      result: {
        data: {
          pokemon_v2_pokemon: [
            {
              id: 1,
              name: 'bulbasaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 2,
              name: 'ivysaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 3,
              name: 'venusaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 4,
              name: 'charmander',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 10,
                    name: 'fire',
                  },
                },
              ],
            },
            {
              id: 5,
              name: 'charmeleon',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 10,
                    name: 'fire',
                  },
                },
              ],
            },
          ],
        },
      },
    },
  ];

  const searchMocks = [
    {
      request: {
        query: GET_ALL_POKEMONS,
        variables: {
          offset: 0,
          input: 'saur',
        },
      },
      result: {
        data: {
          pokemon_v2_pokemon: [
            {
              id: 1,
              name: 'bulbasaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 2,
              name: 'ivysaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 3,
              name: 'venusaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 10033,
              name: 'venusaur-mega',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 10195,
              name: 'venusaur-gmax',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
          ],
        },
      },
    },
  ];

  const TestComponent = (
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <PokemonList />
      </BrowserRouter>
    </MockedProvider>
  );
  const SearchTestComponent = (
    <MockedProvider mocks={searchMocks}>
      <BrowserRouter>
        <PokemonList />
      </BrowserRouter>
    </MockedProvider>
  );
  test('should render pokemons', async () => {
    const {baseElement} = render(TestComponent);
    expect(await screen.findByText(/BULBASAUR/i)).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('should display search results', async () => {
    render(SearchTestComponent);
    expect(await screen.findByText(/VENUSAUR-MEGA/i)).toBeInTheDocument();
  });
});

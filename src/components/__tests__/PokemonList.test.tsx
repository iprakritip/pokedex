import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import PokemonList from '../PokemonList';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {PokemonListMocks, searchMocks} from './mocks/PokemonListMocks';

// const mockedUseContext = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: () => ({searchInput: 'saur'}),
}));
describe('Pokemon List', () => {
  const TestComponent = (
    <MockedProvider mocks={PokemonListMocks}>
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

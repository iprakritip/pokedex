import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Pokemon from '../Pokemon';
import {BrowserRouter} from 'react-router-dom';

describe('Pokemon', () => {
  const mockedFn = jest.fn();
  const types = [
    {pokemon_v2_type: {id: 1, name: 'grass'}},
    {pokemon_v2_type: {id: 2, name: 'poison'}},
  ];

  const TestComponent = (
    <BrowserRouter>
      <Pokemon
        togglePokeInfo={mockedFn}
        id={1}
        name='bulbasaur'
        types={types}
        changeSelectedPokemonId={mockedFn}
        clickedPokemonId={1}
        displayInfo={false}
      />
    </BrowserRouter>
  );

  it('renders properly', () => {
    render(TestComponent);
    expect(screen.getByText('BULBASAUR')).toBeInTheDocument();
  });

  
});

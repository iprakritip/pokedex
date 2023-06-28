import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import MenuItem from '../MenuItem';

describe('MenuItem', () => {
  const TestComponent = (
    <MenuItem label='Pokedex' border='border-red-500' bg='bg-red-500' />
  );
  it('Renders properly',()=>{
    render(TestComponent);
    expect(screen.getByText('Pokedex')).toBeInTheDocument()
  })
});

//passed

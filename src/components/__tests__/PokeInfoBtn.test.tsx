import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import PokeInfoBtn from '../PokeInfoBtn';

describe('Poke Info Btn', () => {
  const mockedFn = jest.fn();

  const TestComponent = <PokeInfoBtn label='Ivysaur' onClick={mockedFn} />;

  it('renders properly',()=>{
    render(TestComponent)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  //passed
  it('renders label properly',()=>{
    render(TestComponent)
    expect(screen.getByText('Ivysaur')).toBeInTheDocument()
  })
  //passed
});

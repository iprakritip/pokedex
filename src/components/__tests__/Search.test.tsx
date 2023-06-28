import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import Search from '../Search';

describe('Search', () => {
  const mockedFn = jest.fn();
  const TestComponent = <Search changeSearchInput={mockedFn} />;

  it('renders input', () => {
    render(TestComponent);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  //passed
  it('rennders Button',()=>{
    render(TestComponent);
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
  //passed
});

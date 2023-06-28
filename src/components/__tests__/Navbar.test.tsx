import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import {BrowserRouter} from 'react-router-dom';

describe('Navbar', () => {
  const mockedFn = jest.fn();

  const TestComponent = (
    <BrowserRouter>
      <Navbar accessMenu={mockedFn} changeSearchInput={mockedFn} />
    </BrowserRouter>
  );

  test('renders search bar', () => {
    render(TestComponent);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  //passed

  test('renders search button', () => {
    render(TestComponent);
    expect(screen.getByText('Search',{
        selector: 'button'
      })).toBeInTheDocument();
  });
  //passed
});

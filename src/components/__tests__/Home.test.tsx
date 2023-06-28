import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from '../../pages/Home';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  const TestComponent = (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  test('renders search bar', () => {
    render(TestComponent);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  //passed

  test('renders search button', () => {
    render(TestComponent);
    expect(
      screen.getByText('Search', {
        selector: 'button',
      })
    ).toBeInTheDocument();
  });
  //passed

  it('should toggle the menu when accessMenu is called', async () => {
    const {getByTestId} = render(TestComponent);
    const menuButton = getByTestId('menu-icon');

    fireEvent.click(menuButton);
     expect(await screen.findByText('Menu')).toBeInTheDocument();
  });

  //passed

  

  test('Renders footer', () => {
    render(TestComponent);
    expect(screen.getByText('Built by')).toBeInTheDocument();
  });
  //passed
});

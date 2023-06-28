import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from '../../App';
import {BrowserRouter} from 'react-router-dom';

describe('App', () => {
  const TestComponent = <App />;

  it('renders properly', () => {
    render(TestComponent);
    expect( screen.getByText(/Sorry/i)).toBeInTheDocument();
  });

  //passed in case of errorpage
});

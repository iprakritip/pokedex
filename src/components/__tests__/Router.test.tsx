import {render, screen} from '@testing-library/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Router from '../../Router';

describe('Router', () => {
  const TestComponent = (
    <MemoryRouter initialEntries={['/']}>
      <Router />
    </MemoryRouter>
  );

  it('renders home initially', async () => {
    render(TestComponent);
    expect(await screen.findByRole('textbox')).toBeInTheDocument();
  });
});

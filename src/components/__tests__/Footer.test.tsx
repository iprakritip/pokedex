  import React from 'react';
  import Footer from '../Footer';
  import {render, screen} from '@testing-library/react';
  import '@testing-library/jest-dom';

describe('footer', () => {
  const TestComponent = (<Footer/>);
  test('Renders properly', () => {
    render(TestComponent);
    expect(screen.getByText('Built by')).toBeInTheDocument();
  });
});

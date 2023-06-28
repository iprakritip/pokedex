import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import Type from '../Type';

describe('Type', () => {
  const TestComponent = <Type typeName='grass' typeId={1} />;
  it('renders properly', () => {
    render(TestComponent);
    expect(screen.getByText('Grass')).toBeInTheDocument();
  });
  //passed
});

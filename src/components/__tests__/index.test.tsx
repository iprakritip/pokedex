import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from '../../App';
import {BrowserRouter} from 'react-router-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const mockClient = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta/',
  cache: new InMemoryCache(),
});

describe('App', () => {
  it('renders properly', () => {
    render(
      <ApolloProvider client={mockClient}>
        <App />
      </ApolloProvider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

});

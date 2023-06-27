import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PokemonInfo from './components/PokemonInfo';
import PokemonList from './components/PokemonList';
import Error from './pages/Error';
import Home from './pages/Home';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <PokemonList />,
          children: [
            {
              path: '/:name',
              element: <PokemonInfo />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

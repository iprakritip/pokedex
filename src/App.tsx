import React, {useEffect} from 'react';
import {useGetAllPokemons} from './api/hooks';
import Home from './pages/Home';

function App() {
  const {data, error, loading} = useGetAllPokemons();
  useEffect(() => {
    console.log({data, error, loading});
  });

  return (
    <div className='App bg-slate-100'>
      <Home />
    </div>
  );
}

export default App;

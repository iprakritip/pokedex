import {ApolloError, gql, useQuery} from '@apollo/client';

const GET_ALL_POKEMONS = gql`
  query GetAllPokemons {
    pokemon_v2_pokemon {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;

interface POKEMON_TYPES {
  id: number;
  name: string;
}
interface POKEMON_DATA {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: POKEMON_TYPES [];
  }[];
}

interface ALL_POKEMONS_DATA {
  error: ApolloError | undefined;
  loading: boolean;
  data: POKEMON_DATA;
}

export const useGetAllPokemons = () => {
  const {error, loading, data} = useQuery(GET_ALL_POKEMONS);
  return {error, loading, data};
};

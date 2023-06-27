import { gql, useLazyQuery, useQuery} from '@apollo/client';

const GET_ALL_POKEMONS = gql`
  query GetAllPokemons($offset:Int!) {
    pokemon_v2_pokemon(limit: 100, offset:$offset)  {
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

// const GET_SEARCHED_POKEMONS = gql`
//   query GetAllPokemons($offset:Int!, $input:String!) {
//     pokemon_v2_pokemon(limit: 100, offset:$offset) (where: {name: {_iregex: "saur"}})   {
//       id
//       name
//       pokemon_v2_pokemontypes {
//         pokemon_v2_type {
//           id
//           name
//         }
//       }
//     }
//   }
// `;

const GET_POKEMON_INFO=gql`
query GetPokemonInfo ($id:Int!){
  pokemon_v2_pokemon(where: {id: {_eq:$id}}) {
    id
    name
    height
    weight
    pokemon_v2_pokemontypes{
      pokemon_v2_type {
        id
        name
      }
    }
    pokemon_v2_pokemonspecy {
      pokemon_v2_pokemonspeciesflavortexts(limit: 1) {
        flavor_text
      }
    }
  }
}
`


export interface DATA {
  pokemon_v2_pokemon:{
    id: number,
    name: string,
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        id:number,
        name: string
      }
    }[],
   
  }[]

}


export const useGetAllPokemons = (offset:number) => {
  const {error, loading, data,fetchMore} = useQuery(GET_ALL_POKEMONS,{
    variables:{
      offset:offset
    }
  });
  return {error, loading, data,fetchMore};
};

// export const useGetSearchedPokemons = (offset:number, input:string) => {
//   const {error, loading, data,fetchMore} = useQuery(GET_ALL_POKEMONS,{
//     variables:{
//       offset:offset,
//       input:input
//     }
//   });
//   return {error, loading, data,fetchMore};
// };

export const useGetPokemonInfo=(pokeid:number)=>{
  const [getPokemonInfo,{error,loading,data}]=useLazyQuery(GET_POKEMON_INFO);
  return{getPokemonInfo,error,loading, data};
}

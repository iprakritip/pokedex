import { gql, useQuery } from "@apollo/client";


const GET_ALL_POKEMONS = gql`
query GetAllPokemons {
  pokemon_v2_pokemon {
    id
    name
    pokemon_v2_pokemonsprites {
      id
      sprites
    }
  }
}
`

// export const allPokemons =()=>{
// const {error,loading, data}=useQuery(GET_ALL_POKEMONS);
// r
// }
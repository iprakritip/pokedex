import {GET_ALL_POKEMONS} from '../../../api/hooks';

export  const PokemonListMocks = [
    {
      request: {
        query: GET_ALL_POKEMONS,
        variables: {
          offset: 0,
        },
      },
      result: {
        data: {
          pokemon_v2_pokemon: [
            {
              id: 1,
              name: 'bulbasaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 2,
              name: 'ivysaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 3,
              name: 'venusaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 4,
              name: 'charmander',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 10,
                    name: 'fire',
                  },
                },
              ],
            },
            {
              id: 5,
              name: 'charmeleon',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 10,
                    name: 'fire',
                  },
                },
              ],
            },
          ],
        },
      },
    },
  ];

 export const searchMocks = [
    {
      request: {
        query: GET_ALL_POKEMONS,
        variables: {
          offset: 0,
          input: 'saur',
        },
      },
      result: {
        data: {
          pokemon_v2_pokemon: [
            {
              id: 1,
              name: 'bulbasaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 2,
              name: 'ivysaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 3,
              name: 'venusaur',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 10033,
              name: 'venusaur-mega',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
            {
              id: 10195,
              name: 'venusaur-gmax',
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    id: 12,
                    name: 'grass',
                  },
                },
                {
                  pokemon_v2_type: {
                    id: 4,
                    name: 'poison',
                  },
                },
              ],
            },
          ],
        },
      },
    },
  ];
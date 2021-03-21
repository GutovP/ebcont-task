export interface Pokemon extends Array<Pokemons> { }

export interface Pokemons {
  count: number;
  next: string;
  results: Results[];
}
export interface Results {
  name: string;
  url: string;
  details: PokemonsDetails;
}
export interface PokemonsDetails {
  sprites: Sprites; // picture
  name: string;
  abilities: Abilities[];
  types: Types[];
  order: number;
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      }
    }
  ];

  evolution: Evolution;
  moves: [];
}
export interface Sprites {
  front_default: string;
}
export interface Types {
  type: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };
}
export interface Abilities {
  ability: {
    name: string;
    url: string;
  };
}

export interface Evolution {
  id: number;
  baby_trigger_item: null;
  chane: {};
}

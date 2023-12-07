export type PokemonInfo = {
  abilities:                Ability[];
  base_experience:          number;
  forms:                    Species[];
  game_indices:             GameIndex[];
  height:                   number;
  held_items:               any[];
  id:                       string | number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  past_abilities:           any[];
  past_types:               any[];
  species:                  Species;
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export type PokemonList = PokemonInfo[]

export type Ability = {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

type Species = {
  name: string;
  url:  string;
}

type GameIndex = {
  game_index: number;
  version:    Species;
}

type Move = {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

type VersionGroupDetail = {
  level_learned_at:  number;
  move_learn_method: Species;
  version_group:     Species;
}

type GenerationV = {
  "black-white": Sprites;
}

type GenerationIv = {
  "diamond-pearl":        Sprites;
  "heartgold-soulsilver": Sprites;
  platinum:               Sprites;
}

type Versions = {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

type Sprites = {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}

type GenerationI = {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

type RedBlue = {
  back_default:      string;
  back_gray:         string;
  back_transparent:  string;
  front_default:     string;
  front_gray:        string;
  front_transparent: string;
}

type GenerationIi = {
  crystal: Crystal;
  gold:    Gold;
  silver:  Gold;
}

type Crystal = {
  back_default:            string;
  back_shiny:              string;
  back_shiny_transparent:  string;
  back_transparent:        string;
  front_default:           string;
  front_shiny:             string;
  front_shiny_transparent: string;
  front_transparent:       string;
}

type Gold = {
  back_default:       string;
  back_shiny:         string;
  front_default:      string;
  front_shiny:        string;
  front_transparent?: string;
}

type GenerationIii = {
  emerald:             OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire":     Gold;
}

type OfficialArtwork = {
  front_default: string;
  front_shiny:   string;
}

type Home = {
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

type GenerationVii = {
  icons:                  DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

type DreamWorld = {
  front_default: string;
  front_female:  null;
}

type GenerationViii = {
  icons: DreamWorld;
}

type Other = {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
}

type Stat = {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

type Type = {
  slot: number;
  type: Species;
}

export type PokemonMoreInfo = {
  base_happiness:         number;
  capture_rate:           number;
  color:                  Color;
  egg_groups:             Color[];
  evolution_chain:        EvolutionChain;
  evolves_from_species:   Color;
  flavor_text_entries:    FlavorTextEntry[];
  form_descriptions:      any[];
  forms_switchable:       boolean;
  gender_rate:            number;
  genera:                 Genus[];
  generation:             Color;
  growth_rate:            Color;
  habitat:                Color;
  has_gender_differences: boolean;
  hatch_counter:          number;
  id:                     number;
  is_baby:                boolean;
  is_legendary:           boolean;
  is_mythical:            boolean;
  name:                   string;
  names:                  Name[];
  order:                  number;
  pal_park_encounters:    PalParkEncounter[];
  pokedex_numbers:        PokedexNumber[];
  shape:                  Color;
  varieties:              Variety[];
}

type Color = {
  name: string;
  url:  string;
}

type EvolutionChain = {
  url: string;
}

type FlavorTextEntry = {
  flavor_text: string;
  language:    Color;
  version:     Color;
}

type Genus = {
  genus:    string;
  language: Color;
}

type Name = {
  language: Color;
  name:     string;
}

type PalParkEncounter = {
  area:       Color;
  base_score: number;
  rate:       number;
}

type PokedexNumber = {
  entry_number: number;
  pokedex:      Color;
}

type Variety = {
  is_default: boolean;
  pokemon:    Color;
}

export type AbilityInfo = {
  effect_changes:      any[];
  effect_entries:      EffectEntry[];
  flavor_text_entries: FlavorText[];
  generation:          Generation;
  id:                  number;
  is_main_series:      boolean;
  name:                string;
  names:               GenerationName[];
  pokemon:             Pokemon[];
}

type EffectEntry = {
  effect:       string;
  language:     Generation;
  short_effect: string;
}

type Generation = {
  name: string;
  url:  string;
}

type FlavorText = {
  flavor_text:   string;
  language:      Generation;
  version_group: Generation;
}

type GenerationName = {
  language: Generation;
  name:     string;
}

type Pokemon = {
  is_hidden: boolean;
  pokemon:   Generation;
  slot:      number;
}

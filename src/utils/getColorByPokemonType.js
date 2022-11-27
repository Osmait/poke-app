import { POKEMON_TYPE_COLORS } from "./constants";

const getColoByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColoByPokemonType;

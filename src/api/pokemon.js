import { API_HOST } from "../utils/constants";

export async function getPokemonApi(endpoindUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpoindUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getPokemonDetailsapi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

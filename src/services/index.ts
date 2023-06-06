import { useQuery } from "react-query";
import { api } from "../libs/axios";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface CharactersProps {
  characters: Character[];
  nextPage: string | null;
}

// export const useFetchCharacters = (page: number) => {
//   const { data, isLoading, error } = useQuery(['characters', page], async () => {
//     await api.get(`people/?page=${page}`);
//   });
//   return { data, isLoading, error };
// }

const getAllCharacters = async (page: number): Promise<CharactersProps> => {
  try {
    const { data } = await api.get(`people/?page=${page}`);
    return { nextPage: data.nextPage, characters: data.characters} as CharactersProps;
  } catch (error) {
    return null;
  }
}

export const appServices = {
  getAllCharacters
}
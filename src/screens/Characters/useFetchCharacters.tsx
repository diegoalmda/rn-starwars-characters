import { useQuery } from "react-query";
import { api } from "../../libs/axios";

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

interface ResultProps extends CharactersProps {
  isLoading: boolean;
  error: Error;
}

export const useFetchCharacters = (page: number) => {
  const { data, isLoading, error } = useQuery(['characters', page], async () => {
    await api.get(`https://swapi.dev/api/people/?page=${page}`);
  });
  return { data, isLoading, error };
}
import { FC, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Layout } from '../../components/Layout';
import { styles } from './styles';

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: {
    name: string;
    diameter: string;
    climate: string;
    terrain: string;
    population: string;
  };
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface Params {
  characterURL: string;
}

export const CharacterDetails: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const route = useRoute();
  const navigation = useNavigation();
  const { characterURL } = route.params as Params;
  
  const { data, isLoading: loading, error } = useQuery<Character>('character', async () => {
    setIsLoading(true);
    const response = await axios.get(characterURL);
    const characterData = response.data;

    const filmPromises = characterData.films.map(filmUrl => axios.get(filmUrl));
    const filmResponses = await Promise.all(filmPromises);
    const filmNames = filmResponses.map(filmResponse => filmResponse.data.title);

    const homeworldResponse = await axios.get(characterData.homeworld);
    const homeworldData = homeworldResponse.data;

    const characterDetails: Character = {
      name: characterData.name,
      height: characterData.height,
      mass: characterData.mass,
      hair_color: characterData.hair_color,
      skin_color: characterData.skin_color,
      eye_color: characterData.eye_color,
      birth_year: characterData.birth_year,
      gender: characterData.gender,
      homeworld: homeworldData,
      films: filmNames,
      species: characterData.species,
      vehicles: characterData.vehicles,
      starships: characterData.starships,
      created: characterData.created,
      edited: characterData.edited,
      url: characterData.url,
    };
    setIsLoading(false);
    return characterDetails;
  });

  if (error) {
    const { message } = error as Error;
    return <Text style={styles.errorMessage}>{message}</Text>
  }

  return (
    <Layout>
      <View style={styles.characterDetailsContainer}>
        <TouchableOpacity 
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Text>
            <AntDesign name="arrowleft" size={24} color={styles.backButtonContent.color} />
            <Text style={styles.backButtonText}>
              Back
            </Text>
          </Text>
        </TouchableOpacity>
        { isLoading ? <ActivityIndicator size={'large'} color={'white'} style={styles.loadingContent} /> : <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data?.name}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Height: {data?.height}</Text>
            <Text style={styles.contentText}>Mass: {data?.mass}</Text>
            <Text style={styles.contentText}>Hair Color: {data?.hair_color}</Text>
            <Text style={styles.contentText}>Skin Color: {data?.skin_color}</Text>
            <Text style={styles.contentText}>Eye Color: {data?.eye_color}</Text>
            <Text style={styles.contentText}>Birth Year: {data?.birth_year}</Text>
            <Text style={styles.contentText}>Gender: {data?.gender}</Text>
            <Text style={styles.contentSubtitle}>Homeworld: {data?.homeworld.name}</Text>
            <Text style={styles.contentText}>Diameter: {data?.homeworld.diameter}</Text>
            <Text style={styles.contentText}>Climate: {data?.homeworld.climate}</Text>
            <Text style={styles.contentText}>Terrain: {data?.homeworld.terrain}</Text>
            <Text style={styles.contentText}>population: {data?.homeworld.population}</Text>
            <Text style={styles.contentSubtitle}>Films</Text>
            <View style={styles.filmsContainer}>
              {data?.films.map((film, index) => (
                <Text style={styles.contentText} key={index}>{film}</Text>
              ))}
            </View>
          </View>
        </View>}
      </View>
    </Layout>
  );
};
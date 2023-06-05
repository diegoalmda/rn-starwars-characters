import { FC, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { api } from '../../libs/axios';
import { useQuery } from 'react-query';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
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

export const Characters:FC = () => {
  const [page, setPage] = useState<number>(1);
  const navigation = useNavigation();

  const { data, isLoading, error } = useQuery<CharactersProps, Error>(['characters', page], async () => {
    const response = await api.get(`https://swapi.dev/api/people/?page=${page}`);
    return { nextPage: response.data.next, characters: response.data.results }
  });

  function handleCharacterDetails(characterURL: string) {
    navigation.navigate('CharacterDetails', { characterURL }); 
  }  

  if (error) {
    const { message } = error as Error;
    return <Text testID='charactersError' style={styles.errorMessage}>{message}</Text>
  }

  return (
    <Layout>
      <View style={styles.charactersContainer}>
        <TouchableOpacity 
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonContent}>
            <AntDesign name="arrowleft" size={24} color={styles.backButtonContent.color} />
            <Text style={styles.backButtonText}>
              Back
            </Text>
          </Text>
        </TouchableOpacity>      
        { isLoading ? <ActivityIndicator testID='loader' size={'large'} color={'white'} style={styles.loadingContent} /> : <>  
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Characters</Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={data?.characters}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <View style={styles.cardsContainer}>
                  <TouchableOpacity
                    testID='goToCharacterDetails'
                    onPress={() => handleCharacterDetails(item.url)}
                  >
                    <Card characterInfo={{ name: item.name, height: item.height, mass: item.mass }} />
                  </TouchableOpacity>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
            />
            <View style={styles.paginationContainer}>
              <TouchableOpacity
                style={ page === 1 ? styles.pageButtonDesabledText : styles.pageButtonText }
                disabled={page === 1} 
                onPress={() => setPage((prevPage) => prevPage - 1)}
              >
                <Text style={styles.pageButtonText}>Previous Page</Text>
              </TouchableOpacity>
              <Text style={styles.pageText}>Page {page}</Text>
              <TouchableOpacity 
                style={ !data?.characters || data?.characters.length === 0 || data?.nextPage === null ? styles.pageButtonDesabledText : styles.pageButtonText }
                disabled={!data?.characters || data?.characters.length === 0 || data?.nextPage === null} 
                onPress={() => setPage((prevPage) => prevPage + 1)}
              >
                <Text style={styles.pageButtonText}>Next Page</Text>
              </TouchableOpacity>
            </View>
          </View>          
        </>}
      </View>
    </Layout>
  )
}
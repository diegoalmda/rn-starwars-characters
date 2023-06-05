import { FC } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Layout } from '../../components/Layout';
import { styles } from './styles';

export const Home:FC = () => {
  const navigation = useNavigation();

  const handleListCharacters = () => {
    navigation.navigate('Characters');
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Image source={require('../../assets/starwars.png')} style={styles.logoImage} />
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.listButton}
          onPress={handleListCharacters}
        >
          <Text  style={styles.buttonText}>List Characters</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  )
}
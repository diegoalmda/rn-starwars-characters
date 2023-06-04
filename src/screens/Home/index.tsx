import { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './styles';

import Logo from '../../assets/starwars.png';

export const Home:FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/starwars.png')} style={styles.logoImage} />
      
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.listButton}
      >
        <Text  style={styles.buttonText}>Listar Personagens</Text>
      </TouchableOpacity>
    </View>
  )
}
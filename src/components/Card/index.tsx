import { FC } from "react";
import { View, Text } from "react-native";
import { styles } from './styles';

interface CardProps {
  characterInfo: {
    name: string;
    height: string;
    mass: string;
  }
}

export const Card:FC<CardProps> = ({ characterInfo }: CardProps) => {
  return (
    <View style={styles.container} >
      <Text style={styles.textName}>{characterInfo.name}</Text>
      <View>
        <Text style={styles.itemText}>Height: {characterInfo.height}</Text>
        <Text style={styles.itemText}>Mass: {characterInfo.mass}</Text>
      </View>
    </View>
  );
}
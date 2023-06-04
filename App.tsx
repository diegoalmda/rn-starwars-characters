import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import backgroundImage from './src/assets/background.png';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ImageBackground 
      style={styles.container}
      source={backgroundImage}
      defaultSource={backgroundImage}
      imageStyle={styles.cover}
    >
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
});

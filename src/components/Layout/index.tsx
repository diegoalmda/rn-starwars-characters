import { FC, ReactNode } from 'react';
import { ImageBackground, Platform, SafeAreaView, StyleSheet } from 'react-native';

import backgroundImage from '../../assets/background.png';

interface LayoutProps {
  children: ReactNode
}

export const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <ImageBackground 
      style={styles.container}
      source={backgroundImage}
      defaultSource={backgroundImage}
      imageStyle={styles.cover}
    >
      <SafeAreaView style={styles.AndroidSafeArea}>
        { children }
      </SafeAreaView>
    </ImageBackground>
  )
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
    opacity: 0.5,
  },
  AndroidSafeArea: {
    flex: 1, 
    marginVertical: Platform.OS === 'android' ? 30 : 0,
    width: '100%',
    paddingHorizontal: 10,
  }
});
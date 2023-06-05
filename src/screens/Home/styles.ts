import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 260,
    height: 120,
  },
  listButton: {
    marginTop: 40,
    textTransform: 'uppercase',
    borderRadius: 10,
    backgroundColor: colors.blue,
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
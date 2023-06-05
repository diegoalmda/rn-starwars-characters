import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.purple_light,
  },
  textName: {
    fontSize: 25,
    color: colors.gray,
    marginBottom: 10,
  },
  itemText: {
    color: colors.gray,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 10,
  }
})
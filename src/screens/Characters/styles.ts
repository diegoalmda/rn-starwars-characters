import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export const styles = StyleSheet.create({
  charactersContainer: {
    flex: 1, 
    alignItems: 'flex-start',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
  },
  backButtonContent: {
    color: colors.gray,
  },
  backButtonText: {
    fontSize: 20,
  },
  titleContainer: {
    width: '100%', 
    alignItems: 'center',
  },
  title: {
    color: colors.gray, 
    fontSize: 30, 
    marginVertical: 20
  },
  cardsContainer: {
    width: '100%', 
    paddingHorizontal: 10,
  },
  listContent: {
    width: '100%',
    paddingBottom: 50,
  },
  paginationContainer: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    position: 'absolute',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#000',
  },
  loadingContent: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%'
  },
  pageButton: {
    backgroundColor: 'transparent',
    padding: 10,
    zIndex: 10,
  },
  pageButtonDesabledText: {
    opacity: 0.3
  },
  pageButtonText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  pageText: {
    color: colors.gray,
    fontSize: 16,
    paddingRight: 22
  },
  errorMessage: {
    color: colors.red,
    fontWeight: 'bold',
  }
});
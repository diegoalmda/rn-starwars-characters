import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export const styles = StyleSheet.create({
  characterDetailsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
  },
  backButtonContent: {
    color: colors.gray,
  },
  backButtonText: {
    color: colors.gray,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.purple,
  },
  loadingContent: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%'
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
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',    
  },
  filmsContainer: {
    justifyContent: 'center',
    alignItems: 'center',    
  },
  contentText: {    
    color: colors.gray, 
    fontSize: 18,
  },
  contentSubtitle: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 5,
    color: colors.gray,
  },
  errorMessage: {
    color: colors.red,
    fontWeight: 'bold',
  }
});
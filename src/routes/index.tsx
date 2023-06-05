import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './app.stack.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  )
}
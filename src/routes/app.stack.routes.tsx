import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Characters } from '../screens/Characters';
import { CharacterDetails } from '../screens/CharacterDetails';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator 
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Characters"
        component={Characters}
      />
      <Screen
        name="CharacterDetails"
        component={CharacterDetails}
      />
    </Navigator>
  )
}
declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    Characters: NavigationStackProp<string>;
    CharacterDetails: NavigationStackProp<string>;
  }
}
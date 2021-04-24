import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { View } from 'react-native';
import { Feed } from './src/Views/Feed'
import { Login } from './src/Views/Login';

const navigator = createStackNavigator({
  Login: { screen: Login },
  Feed: { screen: Feed}
});

const AppContainer = createAppContainer(navigator);

const App = () => {

  return (
      <AppContainer />
  );
};
export default App;

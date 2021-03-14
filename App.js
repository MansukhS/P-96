import React from 'react';
import {Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import WelcomeScreen from './Screens/WelcomeScreen';
import AlarmScreen from './Screens/AlarmScreen';

export default function App() {
  return (
   <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  
  Drawer:{screen:AppDrawerNavigator}
});

const AppContainer = createAppContainer(SwitchNavigator );



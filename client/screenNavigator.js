import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from './src/screens/LandingPage';
import navbar from './src/components/MyTabs';
const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="landingPage"
        component={LandingPage}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="navbar"
        component={navbar}
      />
    </Stack.Navigator>
  );
};

export default ScreenNavigator;

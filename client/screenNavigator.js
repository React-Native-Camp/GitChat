import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from './src/screens/LandingPage';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LandingPage"
        component={LandingPage}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default ScreenNavigator;

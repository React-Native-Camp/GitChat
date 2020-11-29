import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from './src/screens/LandingPage';

const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="landingPage"
        component={LandingPage}
      />
    </Stack.Navigator>
  );
};

export default ScreenNavigator;

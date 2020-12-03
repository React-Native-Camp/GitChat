import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from './src/screens/LandingPage';
import Login from './src/screens/Login';
import AppMainPage from './src/screens/AppMainPage';
import PopUp from './src/components/PopUp';

const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="PopUp"
        component={PopUp}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="LandingPage"
        component={LandingPage}
      /> */}

      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      /> */}

      {/* <Stack.Screen
        options={{headerShown: false}}
        name="AppMainPage"
        component={AppMainPage}
      /> */}
    </Stack.Navigator>
  );
};

export default ScreenNavigator;

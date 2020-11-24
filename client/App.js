import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigator from './screenNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
};

export default App;

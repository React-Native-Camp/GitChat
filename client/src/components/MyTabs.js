import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contacts from './Contacts';
import Messages from './Messages';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" component={Messages} />

      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  );
}

export default MyTabs;

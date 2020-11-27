import React from 'react';
import {View, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/dist/FontAwesome5';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Chat, Contacts and Profile Components for testing the navigation and will be removed later
function Chat() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Chat!</Text>
    </View>
  );
}

function Contacts() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Contacts!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

// to create the tab navigator
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{
        activeTintColor: '#51984C',
      }}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="chat" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="address-book" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="user-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

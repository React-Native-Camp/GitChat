import React from 'react';
import {View, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './styles';

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

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{
        activeTintColor: '#51984C',
        style: {...styles.tabNavigator},
        labelStyle: {...styles.labelStyle},
      }}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <EntypoIcon name="chat" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="user-friends" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="user-alt" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

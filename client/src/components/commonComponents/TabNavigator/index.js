import React from 'react';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatTab from '../../ChatTab';
import ProfileTab from '../../ProfileTab';
import Contacts from '../../../screens/ContactsPage';
import {styles} from './style';

// to create the tab navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChatTab"
      tabBarOptions={{
        activeTintColor: '#639BBB',
        style: {...styles.tabNavigator},
        labelStyle: {...styles.labelStyle},
      }}>
      <Tab.Screen
        name="ChatTab"
        component={ChatTab}
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
        name="ProfileTab"
        component={ProfileTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="user-alt" color={color} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

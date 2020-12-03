import React from 'react';
import {View, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatTab from '../../ChatTab';
import ProfileTab from '../../ProfileTab';
import {styles} from './style';

function Contacts() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Contacts!</Text>
    </View>
  );
}

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

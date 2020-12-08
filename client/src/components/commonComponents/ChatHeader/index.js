import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Appbar} from 'react-native-paper';
import {Button} from 'react-native-paper';

import style from './style.js';
const ChatHeader = ({contectName, showGroupIcon}) => {
  return (
    <Appbar.Header style={style.container}>
      <Icon.Button
        name="chevron-left"
        style={style.backicon}
        onPress={() => {}}
      />
      <Appbar.Content title={contectName} style={style.name} />
      <Icon.Button name="phone" backgroundColor="#24292E" onPress={() => {}} />
      <Button
        icon="account-group-outline"
        color="white"
        disabled={showGroupIcon}
        onPress={() => {}}
      />
    </Appbar.Header>
  );
};

export default ChatHeader;

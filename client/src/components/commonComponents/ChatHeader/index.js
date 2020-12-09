import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Appbar, Button} from 'react-native-paper';
import style from './style.js';

const ChatHeader = ({contactName, showGroupIcon}) => {
  return (
    <Appbar.Header style={style.container}>
      <Icon.Button name="chevron-left" style={style.backicon} />
      <Appbar.Content title={contactName} style={style.name} />
      <Icon.Button name="phone" style={style.phoneIcon} />
      <Button
        icon="account-group-outline"
        color="white"
        style={showGroupIcon ? style.show : style.hide}
      />
    </Appbar.Header>
  );
};

export default ChatHeader;

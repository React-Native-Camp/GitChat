/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, Image} from 'react-native';

import {Button} from 'react-native-paper';
import lonelyChat from '../../assets/images/lonelyChat.png';
import styles from './style';

const ChatTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lonelyImgContainer}>
        <Image source={lonelyChat} />

        <Text style={styles.feelingLonelyText}>Feeling Lonely?</Text>

        <Button
          icon="plus"
          mode="contained"
          style={styles.startNewChatButton}
          onPress={() => navigation.navigate('ContactsPage')}>
          Start a new chat
        </Button>
      </View>
    </View>
  );
};

export default ChatTab;

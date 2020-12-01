import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';

import {styles} from './style';

const ChatInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.chatContainer}>
      <TextInput
        value={text}
        mode="outlined"
        placeholder="Type a message"
        onChangeText={(text) => setText(text)}
        multiline={true}
        style={styles.chatInput}
        theme={{colors: {primary: '#639BBB', underlineColor: 'transparent'}}}
      />
      <IonIcon name="attach" color="#24292E" size={40} />

      <IonIcon name="mic-outline" color="#24292E" size={40} />
    </View>
  );
};

export default ChatInput;

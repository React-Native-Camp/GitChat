import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {styles} from './style';

const ChatInput = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (text) => {
    setText(text);

    // to change the mic icon to send icon when the user start typing
    text.length >= 1 ? setIsTyping(true) : setIsTyping(false);
  };

  return (
    <View style={styles.chatContainer}>
      <TextInput
        value={text}
        mode="outlined"
        placeholder="Type a message"
        onChangeText={handleInputChange}
        multiline={true}
        dense={true}
        style={styles.chatInput}
        theme={{colors: {primary: '#639BBB', underlineColor: 'transparent'}}}
      />
      <IonIcon name="attach" color="#24292E" size={42} />
      {isTyping ? (
        <MaterialCommunityIcons name="send-circle" color="#24292E" size={40} />
      ) : (
        <IonIcon name="mic-outline" color="#24292E" size={40} />
      )}
    </View>
  );
};

export default ChatInput;

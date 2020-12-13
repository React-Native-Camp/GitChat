import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {styles} from './style';
import useChat from './useChat';

const ChatInput = () => {
  const [isTyping, setIsTyping] = useState(false);
  const {messages, sendMessage} = useChat();
  const [newMessage, setNewMessage] = React.useState(''); // Message to be sent

  useEffect(() => {
    // to change the mic icon to send icon when the user start typing
    newMessage.length >= 1 ? setIsTyping(true) : setIsTyping(false);
  }, [newMessage, isTyping]);

  const handleNewMessageChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <View style={styles.conversationScreen}>
      <View style={styles.messagesContainer}>
        {messages.map((message, i) => (
          <Text
            key={i}
            style={
              message.ownedByCurrentUser
                ? styles.myMessage
                : styles.receivedMessage
            }>
            {message.body}
          </Text>
        ))}
      </View>
      <View style={styles.chatInputContainer}>
        <TextInput
          value={newMessage}
          mode="outlined"
          placeholder="Type a message"
          onChangeText={handleNewMessageChange}
          onSubmitEditing={handleSendMessage}
          dense={true}
          style={styles.chatInput}
          theme={{colors: {primary: '#639BBB', underlineColor: 'transparent'}}}
        />
        <IonIcon name="attach" color="#24292E" size={42} />
        {isTyping ? (
          <MaterialCommunityIcons
            name="send-circle"
            color="#24292E"
            size={40}
          />
        ) : (
          <IonIcon name="mic-outline" color="#24292E" size={40} />
        )}
      </View>
    </View>
  );
};

export default ChatInput;

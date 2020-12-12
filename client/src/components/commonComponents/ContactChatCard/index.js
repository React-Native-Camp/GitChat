import React from 'react';
import {View, ScrollView} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const ContactChatCard = ({contactName, handleIconClick, ImgUrl}) => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.avatarNameContainer}>
          <Avatar.Image
            style={styles.avatar}
            size={60}
            source={{uri: ImgUrl}}
          />
          <Title style={styles.contactName}>{contactName}</Title>
        </View>

        <Ionicons
          name="chatbox-ellipses"
          size={20}
          style={styles.icon}
          animated={true}
          onPress={() => {
            handleIconClick;
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ContactChatCard;

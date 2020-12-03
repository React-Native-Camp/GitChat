import React from 'react';
import {View, ScrollView} from 'react-native';
import {IconButton, Avatar, Title} from 'react-native-paper';
import styles from './style';

const ContactChatCard = ({contactName, icon, handleIconClick}) => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.avatarNameContainer}>
          <Avatar.Image
            style={styles.avatar}
            size={60}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <Title style={styles.contactName}>{contactName}</Title>
        </View>

        <IconButton
          icon={icon}
          color="#fff"
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

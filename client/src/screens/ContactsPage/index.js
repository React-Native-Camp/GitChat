import React, {useEffect, useState} from 'react';
import styles from './style';
import {View, Text, ScrollView} from 'react-native';
import {IconButton} from 'react-native-paper';
import axios from 'axios';
import Search from '../../components/commonComponents/Search';
import ContactChatCard from '../../components/commonComponents/ContactChatCard';

const Contacts = () => {
  //userName is default until we get the userName from the OAuth
  const [userName, setUserName] = useState('bayan-404');
  const [followers, setFollowers] = useState();

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/followers`)
      .then(({data}) => setFollowers(data))
      .catch((err) => err);
  }, [userName]);

  return (
    <ScrollView>
      <View style={styles.searchSection}>
        <Search style={styles.search} />
        <IconButton
          icon="account-group-outline"
          mode="contained"
          color="white"
          style={styles.button}
        />
      </View>
      <ScrollView style={styles.contactsContainer}>
        {followers ? (
          followers.map((follower) => (
            <ContactChatCard
              key={follower.id}
              contactName={follower.login}
              ImgUrl={follower.avatar_url}
            />
          ))
        ) : (
          <Text>loading ...</Text>
        )}
      </ScrollView>
    </ScrollView>
  );
};

export default Contacts;

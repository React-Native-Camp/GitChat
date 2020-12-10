import React, {useEffect, useState} from 'react';
import styles from './style';
import {View, Text, ScrollView} from 'react-native';
import {IconButton} from 'react-native-paper';
import axios from 'axios';
import Search from '../../components/commonComponents/Search';
import ContactChatCard from '../../components/commonComponents/ContactChatCard';

//userName default until we get the userName from the Outh
const Contacts = (userName = 'bayan-404') => {
  const [Data, setData] = useState();

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/followers`)
      .then(({data}) => setData(data))
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
          onPress={() => console.log('Pressed')}
          style={styles.button}
        />
      </View>
      <ScrollView style={styles.contactsContainer}>
        {Data ? (
          Data.map((follower) => (
            <ContactChatCard
              key={follower.id}
              contactName={follower.login}
              ImgUrl={follower.avatar_url}
              icon="chat"
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

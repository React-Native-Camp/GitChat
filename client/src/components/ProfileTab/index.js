import React, {useEffect} from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';

import styles from './style';

const ProfileTab = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', (e) => {
      Linking.openURL('https://github.com/Rahaf-96');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.redirectionNote}>
        If you are not automatically redirected,
      </Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/Rahaf-96')}>
        <Text style={styles.githubProfileLink}> Click here to continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTab;

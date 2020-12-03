import React, {useEffect} from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';

import styles from './style';

const ProfileTab = ({navigation}) => {
  useEffect(() => {
    navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      e.preventDefault();
      return Linking.openURL('https://github.com');
    });
  }, []);

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.redirectionNote}>
        if you are not automaticly redirected,
      </Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://github.com')}>
        <Text style={styles.githubProfileLink}> Click here to continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTab;

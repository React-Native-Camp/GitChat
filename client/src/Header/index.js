import React from 'react';
import Logo from '../assets/icons/HeaderLogo.svg';
import {Appbar, Avatar, Provider as PaperProvider} from 'react-native-paper';
import {View} from 'react-native';
import styles from './style';

function Header() {
  return (
    <PaperProvider>
      <Appbar.Header style={styles.bottom}>
        <View style={styles.container}>
          <Avatar.Image size={40} source={Logo} style={styles.Logo} />
          <Appbar.Content title="GitChat" style={styles.text} />
        </View>
      </Appbar.Header>
    </PaperProvider>
  );
}

export default Header;

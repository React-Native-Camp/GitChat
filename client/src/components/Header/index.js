import React from 'react';
import Logo from '../../assets/icons/HeaderLogo.png';
import {Appbar, Avatar} from 'react-native-paper';
import styles from './style';

function Header() {
  return (
    <Appbar.Header style={styles.header}>
      <Avatar.Image size={40} source={Logo} style={styles.Logo} />
      <Appbar.Content title="GitChat" style={styles.text} />
    </Appbar.Header>
  );
}

export default Header;

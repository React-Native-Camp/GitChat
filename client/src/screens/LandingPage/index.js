/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import LandingPageImage from '../../assets/images/githubLogo.svg';
import UpArrow from '../../assets/icons/upArrow.svg';
import styles from './style';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LandingPageImage style={styles.appLogo} />
        <Text style={styles.appTitle}>GitChat</Text>
      </View>

      <TouchableOpacity
        style={styles.upArrowContainer}
        title="Go to Login page"
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <UpArrow style={styles.upArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

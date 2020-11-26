/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import LandingPageImage from '../../assets/images/landingPageLogo.svg';
import UpArrow from '../../assets/icons/upArrow.svg';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24292E',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogo: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: '#9cdaf0',
    marginBottom: 10,
  },

  appTitle: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 26,
    lineHeight: 43,
    textAlign: 'center',
  },
  upArrowContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  upArrow: {
    width: 25,
    height: 25,
  },
});

export default LandingPage;

import React from 'react';
import {View, Text, Linking, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import LandingPageImage from '../../assets/images/landingPageLogo.svg';

const Login = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <LandingPageImage />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>

        <View>
          <Button
            icon="github"
            mode="contained"
            style={styles.loginButton}
            onPress={() => navigation.navigate('ChatPage')}>
            Login with github
          </Button>

          <View style={styles.createAccountTextContainer}>
            <Text style={styles.createAccountText}>
              If you don't have an account, create one
            </Text>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.coms')}>
              <Text style={styles.hereLink}>here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24292E',
  },
  logoContainer: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFFBFB',
    borderTopLeftRadius: 60,
  },
  loginText: {
    fontFamily: 'Rubik',
    fontSize: 30,
    lineHeight: 36,
    color: '#000000',
  },
  loginButton: {
    width: 280,
    height: 60,
    backgroundColor: '#24292E',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  createAccountTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    flexWrap: 'wrap',
  },
  createAccountText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
  },
  hereLink: {
    color: 'blue',
    fontSize: 12,
    paddingLeft: 3,
    fontWeight: 'bold',
  },
});

export default Login;

import React from 'react';
import {View, Text, Linking, TouchableOpacity, Image} from 'react-native';

import styles from './style';
import GithubLogo from '../../assets/images/githubLogo.svg';

const Login = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <GithubLogo style={styles.logo} />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.login}>Login</Text>

        <View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('ChatPage')}>
            <Image
              style={styles.githubIcon}
              source={require('../../assets/icons/github.png')}
            />
            <Text style={styles.loginText}>Login with github</Text>
          </TouchableOpacity>

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

export default Login;

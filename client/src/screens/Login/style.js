import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24292E',
  },
  logoContainer: {
    flex: 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  loginContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFFBFB',
    borderTopLeftRadius: 60,
  },
  login: {
    fontFamily: 'Rubik',
    fontSize: 36,
    lineHeight: 36,
    color: '#000000',
  },
  loginButton: {
    width: 270,
    height: 60,
    backgroundColor: '#24292E',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loginText: {
    fontFamily: 'Rubik',
    fontSize: 17,
    color: '#FFFBFB',
    textTransform: 'uppercase',
  },
  githubIcon: {
    width: 24,
    height: 24,
  },
  createAccountTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
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

export default styles;

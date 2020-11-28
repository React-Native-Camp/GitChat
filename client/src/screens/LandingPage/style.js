import {StyleSheet} from 'react-native';

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

export default styles;

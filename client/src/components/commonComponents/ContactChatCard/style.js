import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    width: '100%',
  },
  avatarNameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '55%',
  },
  avatar: {
    borderRadius: 50,
    marginRight: 10,
  },
  contactName: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 22,
    maxWidth: '90%',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#787878',
    color: '#ffffff',
    borderRadius: 50,
    padding: 10,
  },
});

export default styles;

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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '55%',
  },
  avatar: {
    borderStyle: 'solid',
    borderWidth: 0.8,
    borderColor: 'black',
    borderRadius: 50,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  contactName: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 22,
    maxWidth: '90%',
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '#414141',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default styles;

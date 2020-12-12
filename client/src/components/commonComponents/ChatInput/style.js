import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  conversation: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  chatContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,

    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  chatInput: {
    borderColor: '#24292E',
    width: 280,
    maxHeight: 150,
  },
  myMessage: {
    alignSelf: 'flex-end',
    color: 'black',
    backgroundColor: 'red',
    textAlign: 'right',
    padding: 10,
    marginBottom: 5,
  },
  receivedMessage: {
    color: 'blue',
  },
});

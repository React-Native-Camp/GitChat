import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  conversationScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  chatInputContainer: {
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
    textAlign: 'right',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    color: 'white',
    textAlign: 'left',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#24292E',
    borderColor: 'black',
  },
});

import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Dialog, Portal, TextInput} from 'react-native-paper';

const PopUp = () => {
  const [visible, setvisible] = useState(false);
  const [text, setText] = useState('');
  const showPopUp = () => setvisible(true);
  const hidePopUp = () => setvisible(false);

  return (
    <View>
      <Button onPress={showPopUp}>DONE</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hidePopUp}>
          <Dialog.Title>Enter Your Group Name</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Group Name"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button disabled={!text} onPress={hidePopUp} mode="contained">
              CREATE
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
export default PopUp;

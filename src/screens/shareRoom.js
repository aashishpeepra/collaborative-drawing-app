import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Share from 'react-native-share';
import Button from '../Components/Button';
const JoinRoom = (props) => {
  const [name, setName] = useState('578903');

  const setToClipboard = () => {
    Clipboard.setString('578903');
    Alert.alert('📒 Copied to clipboard.');
  };
  const shareMediaButton = () => {
    Share.open({
      title: 'Join Artisian board',
      message:
        "Hey 👋 I'm inviting you to join me over collaborative drawing platform Artisian board. The code is 578903 ",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={style.joinRoomInternam}>
        <View>
          <Text style={style.homeHeading}>Invite to Artisian room</Text>
        </View>
        <Text style={{fontSize: 16, letterSpacing: 1, textAlign: 'center'}}>
          Share the below code with your friends.
        </Text>
        <View style={{marginTop: 70}}>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Name"
            onChangeText={(text) => setName(text)}
            value={name}
            style={joinInputName}
            editable={false}
          />
        </View>
        <View style={style.joinButtonHolder}>
          <Button click={setToClipboard} head="Copy to clipboard" />
          <Button click={shareMediaButton} head="Share with friends" />
          <Button
            click={() => props.navigation.navigate('Room')}
            head="Go into Room"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default JoinRoom;
const style = StyleSheet.create({
  joinRoom: {},
  joinRoomInternam: {
    margin: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  joinInput: {
    borderWidth: 1,
    borderColor: '#111111',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    textAlign: 'center',
    width: 230,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  joinInputName: {
    letterSpacing: 5,
  },
  joinButtonHolder: {
    marginTop: 60,
  },
});
const joinInputName = StyleSheet.compose(style.joinInput, style.joinInputName);

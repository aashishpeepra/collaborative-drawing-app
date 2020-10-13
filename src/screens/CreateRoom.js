import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Button from '../Components/Button';
const JoinRoom = (props) => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={style.joinRoomInternam}>
        <View>
          <Text style={style.homeHeading}>Join Artisian Room</Text>
          
        </View>
        <Text style={{fontSize:16,letterSpacing:1,textAlign:"center"}}>Enter your name to create your personal Artisian room.</Text>
        <View style={{marginTop: 70}}>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Name"
            onChangeText={(text) => setName(text)}
            value={name}
            style={joinInputName}
            autoCompleteType="name"
            autoFocus={true}
            textContentType="name"
          />

        </View>
        <View style={style.joinButtonHolder}>
          <Button click={() => props.navigation.navigate('Share')} head="CREATE ROOM" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default JoinRoom;
const style = StyleSheet.create({
  joinRoom: {},
  joinRoomInternam: {
    margin: 50,
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

  joinButtonHolder: {
    marginTop: 100,
  },
});
const joinInputName = StyleSheet.compose(style.joinInput, style.joinInputName);

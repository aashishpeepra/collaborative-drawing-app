import React from 'react';
import {StyleSheet, View, Text, ScrollView, Share} from 'react-native';
import Home from './src/screens/Home';
import JoinRoom from './src/screens/JoinRoom';
import CreateRoom from './src/screens/CreateRoom';
import ShareRoom from './src/screens/shareRoom';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Room from './src/screens/Room';
import Temp from './src/screens/temp';
const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Temp" component={Temp}/> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Join" component={JoinRoom} />
        <Stack.Screen name="Share" component={ShareRoom} />
        <Stack.Screen name="Create" component={CreateRoom} />
        <Stack.Screen name="Room" component={Room} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  genesis: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 50,
    color: '#111111',
  },
});

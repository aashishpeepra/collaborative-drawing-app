import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import Button from '../Components/Button';

const Home = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={style.Home}>
        <Text style={style.homeHeading}>Welcome Artisians</Text>
        <Text style={style.homePara}>
          This app lets you connect with one or more friends and draw with them.
        </Text>
        <View style={style.homeButtonHolder}>
          <Button
            click={() => props.navigation.navigate('Join')}
            head="JOIN ROOM"
          />
          <Button
            click={() => props.navigation.navigate('Create')}
            head="CREATE ROOM"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const style = StyleSheet.create({
  Home: {
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
  homePara: {
    letterSpacing: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  homeButtonHolder: {
    marginTop: 130,
  },
});

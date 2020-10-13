import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity accessibilityRole="button" accessibilityLabel={props.head} style={style.myButton} onPress={props.click}>
      <Text style={style.myButtonText}>{props.head}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  myButton: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#111111',
    margin: 15,
  },
  myButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize:16,
    fontWeight: 'bold',
    letterSpacing:1
  },
});

export default Button;

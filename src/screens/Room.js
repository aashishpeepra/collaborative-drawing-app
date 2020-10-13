import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
// import RNDraw from 'rn-draw';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
class Room extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{height: 400, width: 500}}
          contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <SketchCanvas
              style={{flex: 1}}
              strokeColor={'red'}
              strokeWidth={7}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Room;

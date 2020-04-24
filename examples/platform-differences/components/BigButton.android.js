import React from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';

const AndroidBigButton = ({ title }) => (
  <TouchableHighlight onPress={() => console.log('pressing android')}>
    <View style={{padding: 30, width: '50%', backgroundColor: 'blue'}}>
      <Text style={{color: "white"}}>{title}</Text>
    </View>
  </TouchableHighlight>
);

export default AndroidBigButton;
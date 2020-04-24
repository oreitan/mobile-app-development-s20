import React from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const AppleBigButton = ({ title }) => (
  <TouchableOpacity onPress={() => console.log('pressing android')}>
    <View style={{padding: 30, width: '100%', backgroundColor: 'yellow'}}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default AppleBigButton;

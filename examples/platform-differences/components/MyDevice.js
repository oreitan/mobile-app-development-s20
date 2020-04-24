import React from 'react'
import { Platform, View, Text, StyleSheet, Button } from 'react-native';

function sendIosNotification(){
  console.log('sending to Apple notificaiton center')
}
function sendAndroidNotification(){
  console.log('sending to Google notificaiton center')
}

function isIos(){
  return Platform.OS === 'ios'
}

const MyDevice = () => 
  <View style={styles.wrapper}>
    <Text>{Platform.OS}</Text>
    <Text>{Platform.Version}</Text>
    <Button title={`Send ${isIos() ? 'Apple' : 'Google'} Notification`} onPress={() => {
      if(isIos()){
        sendIosNotification()
      } else if(Platform.OS === 'android'){
        sendAndroidNotification()
      } else {
        alert('Notify!')
      }
    }}/>
  </View>;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: isIos() ? 'pink' : 'yellowgreen'
  }
})
export default MyDevice;

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { func } from 'prop-types';

const AddItem = ({ onAddPressed }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={'todo...'}
        style={styles.textInput}
        onSubmitEditing={({ nativeEvent: { text } }) => onAddPressed(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'yellowgreen'
  },
  textInput: {
    fontSize: 30
  }
});

AddItem.propTypes = {
  onAddPressed: func
};
export default AddItem;

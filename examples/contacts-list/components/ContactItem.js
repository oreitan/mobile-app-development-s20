import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

const ContactItem = ({ name, number }) => (
  <View style={styles.contactItem}>
    <Text style={styles.contactItemText}>{name}</Text>
    <Text style={styles.contactItemText}>{number}</Text>
  </View>
)

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string
}

const styles = StyleSheet.create({
  contactItem: {
    flex: 1,
    justifyContent: 'space-around',
    height: 70,
    padding: 6,
    borderColor: '#2f363c',
    borderStyle: 'solid',
    borderWidth: 1
  },
  contactItemText: {
    fontSize: 18
  }
})
export default ContactItem

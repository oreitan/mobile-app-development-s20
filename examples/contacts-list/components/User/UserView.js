import React from 'react'
import { string } from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

function mapStateToProps({ user }) {
  return {
    email: user.email,
    fullName: user.name
  }
}

function UserView({ email, fullName }) {
  return (
    <View style={styles.userView}>
      <Text>{fullName}</Text>
      <Text>{email}</Text>
    </View>
  )
}

UserView.propTypes = {
  email: string,
  fullName: string
}

const styles = StyleSheet.create({
  userView: {
    padding: 10,
    backgroundColor: '#abcdef'
  }
})

export default connect(mapStateToProps)(UserView)

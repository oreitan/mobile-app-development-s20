import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
    // backgroundColor: 'red'
  },
  safeArea: {
    backgroundColor: '#2f363c'
  },
  search: {
    borderColor: '#2f363c',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    fontSize: 28,
    padding: 10
  },
  indicator: {
    ...StyleSheet.absoluteFill,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f363c'
  }
})

export default styles

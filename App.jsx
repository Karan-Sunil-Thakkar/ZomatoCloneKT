import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
  <LoginScreen />
  )
}

export default App

const styles = StyleSheet.create({
  container:{

    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  }
})
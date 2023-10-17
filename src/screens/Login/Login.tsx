import { API } from 'services/api'
import { useTheme } from 'hooks'
import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'

const Login = () => {
  const { Layout } = useTheme()

  const login = async () => {
    try {
    } catch (error) {}
  }
  return (
    <View style={[Layout.fill, Layout.center]}>
      <Button icon="login" mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
})

import { useTheme } from 'hooks'
import * as React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Login = () => {
  const { Layout } = useTheme()

  return (
    <View style={[Layout.fill, Layout.center]}>
      <Button icon="login" mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>
  )
}

export default Login

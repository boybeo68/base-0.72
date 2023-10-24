import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

export type MainParamsList = {
  Home: undefined
  Login: undefined
  ListProduct: undefined
}

export type ApplicationStackParamList = {
  Startup: undefined
  Main: undefined
  Login: undefined
  ListProduct: undefined
}

export type ApplicationScreenProps = StackScreenProps<ApplicationStackParamList>

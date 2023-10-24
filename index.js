/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import CodePush from 'react-native-code-push'
import { codePushOptions } from 'utils/CodePush'

AppRegistry.registerComponent(appName, () => CodePush(codePushOptions)(App))

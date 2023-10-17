import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './store'
import ApplicationNavigator from './navigators/Application'
import './translations'
import { NativeModules, LogBox } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import paperTheme from 'theme/paperTheme'
import FlashMessage from 'react-native-flash-message'

LogBox.ignoreLogs(['new NativeEventEmitter'])
LogBox.ignoreAllLogs() //Ignore all log notifications

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <PaperProvider theme={paperTheme}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
          <FlashMessage position="top" />
        </PersistGate>
      </PaperProvider>
    </Provider>
  </GestureHandlerRootView>
)

export default App

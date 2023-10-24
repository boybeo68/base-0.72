import { Platform } from 'react-native'
import CodePush, { CodePushOptions } from 'react-native-code-push'

export const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
  mandatoryInstallMode: CodePush.InstallMode.ON_NEXT_RESTART,
  rollbackRetryOptions: {
    delayInHours: 1,
    maxRetryAttempts: 2,
  },
  deploymentKey:
    Platform.OS === 'ios' ? process.env.CODEPUSH_KEY_IOS : process.env.CODEPUSH_KEY_ANDROID,
}

//@ts-nocheck
const childProcess = require('child_process')
const utils = require('./utils.ts')
const target = utils.getTargetName()

if (target) {
  console.log(`Codepush for ${target}`)
  utils.loadEnvConfig(target)
  childProcess.execSync(
    `appcenter codepush release-react -a ${process.env.APPCENTER_IOS_APP_NAME} -d ${target} -m --debug`
  )
  childProcess.execSync(
    `appcenter codepush release-react -a ${process.env.APPCENTER_ANDROID_APP_NAME} -d ${target} -m --debug`
  )
  childProcess.execSync(`node ./scripts/printCodepush.ts ${target}`)
} else {
  console.log(`No target for codepush`)
}

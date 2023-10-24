//@ts-nocheck
const childProcess = require('child_process')
const utils = require('./utils.ts')
const target = utils.getTargetName()

if (target) {
  console.log(`Building for ${target}`)
  utils.loadEnvConfig(target)
  childProcess.execSync(
    `appcenter build queue --app ${process.env.APPCENTER_IOS_APP_NAME} --branch ${
      process.env.BRANCH || target
    }`
  )
  childProcess.execSync(
    `appcenter build queue --app ${process.env.APPCENTER_ANDROID_APP_NAME} --branch ${
      process.env.BRANCH || target
    }`
  )
} else {
  console.log(`No target for buidling`)
}

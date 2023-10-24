//@ts-nocheck
const chalk = require('chalk')
const fs = require('fs')

const childProcess = require('child_process')
const rimraf = require('rimraf')
const utils = require('./utils.ts')

const target = utils.getTargetName()

if (target) {
  utils.loadEnvConfig(target)
  childProcess.execSync(
    `appcenter codepush deployment list --app ${process.env.APPCENTER_IOS_APP_NAME} --output json > codepush_ios.json`
  )

  const codePushIos = fs.readFileSync('./codepush_ios.json', 'utf8')
  const codePushIosData = JSON.parse(codePushIos)
  const codePushIosDataFlavorData = codePushIosData.find((data) => data.name === target)
  console.log(
    process.env.APPCENTER_IOS_APP_NAME,
    `${codePushIosDataFlavorData.latestRelease.label}`
  )
  childProcess.execSync(
    `appcenter codepush deployment list --app ${process.env.APPCENTER_ANDROID_APP_NAME} --output json > codepush_android.json`
  )
  const codePushAndroid = fs.readFileSync('./codepush_android.json', 'utf8')
  const codePushAndroidData = JSON.parse(codePushAndroid)
  const codePushAndroidDataFlavorData = codePushAndroidData.find((data) => data.name === target)
  console.log(
    process.env.APPCENTER_ANDROID_APP_NAME,
    `${codePushAndroidDataFlavorData.latestRelease.label}`
  )

  rimraf('codepush_ios.json', () => {})
  rimraf('codepush_android.json', () => {})

  console.log(chalk.green('Finish!'))
}

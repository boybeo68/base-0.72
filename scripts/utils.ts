//@ts-nocheck
const dotenv = require('dotenv')
const fs = require('fs')
const childProcess = require('child_process')

const targets = ['dev', 'stg', 'prod']

module.exports = {
  getTargetName: function () {
    const tag = process.argv.slice(2)[0] || ''
    return targets.find((target) => tag === target || tag.includes(target))
  },
  loadEnvConfig: function (target) {
    if (!fs.existsSync('.env')) {
      childProcess.execSync(`echo "$ENV_${target}" | base64 --decode > ".env"`)
    }
    dotenv.config()
  },
}

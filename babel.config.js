/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
          '@': './src',
          types: './@types',
        },
      },
    ],
    [
      'inline-dotenv',
      {
        systemVar: 'overwrite',
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
}

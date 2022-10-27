module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@containers': './src/containers',
          '@contexts': './src/contexts',
          '@localization': './src/i10n',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@service': './src/service',
        },
      },
    ],
  ],
};

const { withExpo } = require('@expo/next-adapter');
// const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native / Expo packages here...
    // '@react-navigation/native',
    // '@react-navigation/native-stack',
    'expo-status-bar',
    // '@expo/vector-icons',
    // 'react-native-vector-icons',
    // 'react-native-safe-area-context',
    // 'react-native-screens',
  ],
});

module.exports = nextConfig;

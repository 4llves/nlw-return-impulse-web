import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { ImageBackground } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';


import { theme } from './src/theme';
import Widget from './src/components/Widget';


export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      {/* <ImageBackground
        source={require('./src/assets/backgoundImg.png')}
        style={{
          width: 400,
          height: 570

        }}
      /> */}
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >

        <StatusBar style="light" backgroundColor="transparent" translucent />

        <Widget />
      </View>
    </>
  );
}

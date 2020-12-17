import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { RussoOne_400Regular, useFonts } from '@expo-google-fonts/russo-one';


import Routes from './src/router';

export default function App() {

  let [fontsLoaded] = useFonts({
    RussoOne_400Regular,
  });

  if (!fontsLoaded) {
  return <AppLoading/>;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}



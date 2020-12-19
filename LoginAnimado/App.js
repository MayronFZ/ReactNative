import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  AppLoading  from 'expo-app-loading';
import { useFonts, RussoOne_400Regular } from '@expo-google-fonts/russo-one'


import Routes from './src/router';

export default function App() {
  let[ fontsLoaded ] = useFonts({
    RussoOne_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  return(
    <>
    <StatusBar/>
    <Routes/>
    </>
  );

}
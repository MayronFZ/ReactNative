import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, StyleSheet, Text, View } from 'react-native';

function HomeScreen(){
  return(
    <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  
  );
}
 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
export default App;





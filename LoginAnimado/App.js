import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity, TextInput, View, KeyboardAvoidingView, } from 'react-native'; 

export default function App() {

  return (
    <KeyboardAvoidingView style={styles.background}>    
      <View style={styles.container}>
          <AntDesign name="user" size={24} color='#FFF'/>
        <TextInput 
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }} />
          <MaterialCommunityIcons name="onepassword" size={24} color='#FFF' />
        <TextInput  
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
           onChangeText={() => { }} />
        <TouchableOpacity style={styles.btnSubmit}>

          <Text style={styles.submitText}>Acessar</Text>
          
        </TouchableOpacity>
      <StatusBar name="light" translucent={true} />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 30,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#359',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',

  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF'
  }
  
    
  }


)


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Text, TouchableOpacity, TextInput, View, KeyboardAvoidingView, } from 'react-native'; 

import styles from './styles';

export default function Login({ navigation }){
  return (
    <KeyboardAvoidingView style={styles.background}>    
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor='#121212' translucent={true}  /> 
          <AntDesign name="user" size={24} color='#FFF'/>
        <TextInput 
          style={styles.input}
          placeholder="Usuário"
          autoCorrect={false}
          onChangeText={() => { }} />
          <MaterialCommunityIcons name="onepassword" size={24} color='#FFF' />
        <TextInput  
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
           onChangeText={() => { }} />
        <TouchableOpacity style={styles.btnSubmit}
             
       onPress={()=> navigation.navigate('Home')}>
         <Text style={styles.submitText}>Acessar</Text>
       </TouchableOpacity>
          
          
        
      
      </View>
    </KeyboardAvoidingView>
  );
}

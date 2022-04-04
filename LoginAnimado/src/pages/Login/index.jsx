import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Text, TouchableOpacity, TextInput, View, KeyboardAvoidingView, } from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor='#121212' translucent={true} />

        <View style={styles.inputArea}>
          <AntDesign style={styles.iconLogin} name="user" size={23} color='#000' />

          <TextInput
            placeholder="Usuário"
            autoCorrect={false}
            fontSize={18}
            onChangeText={() => { }} />
        </View>

        <View style={styles.inputPass}>
          <MaterialCommunityIcons style={styles.iconPass}  name="onepassword" size={23} color='#000' />
          <TextInput
            placeholder="Senha"
            fontSize={18}
            autoCorrect={false}
            onChangeText={() => { }}
            secureTextEntry={true} 
            />
        </View>
        <TouchableOpacity style={styles.btnSubmit}

          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.submitText}>Acessar</Text>

        </TouchableOpacity>




      </View>
    </KeyboardAvoidingView>
  );
}

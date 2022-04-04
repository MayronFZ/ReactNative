import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#FFF', }}>

      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />

        </View>
        <TouchableOpacity style={styles.btnSubmit}

          onPress={() => navigation.navigate('Tenis')}>
          <Text style={styles.submitText}>Tênis</Text>

        </TouchableOpacity>
      </View>

    </ScrollView>

  );

}
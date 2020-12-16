import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,  } from 'react-native';

export default function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);




    if(imc < 18.5){
    alert('Magreza! ' + imc.toFixed(2));
    }else if(imc >= 18.5 && imc < 24.9){
        alert('Peso Normal! ' + imc.toFixed(2));
    }else if(imc >= 25.0 && imc < 29.9){
        alert('Sobrepeso! ' + imc.toFixed(2));
    }else if(imc >= 30.0 && imc < 39.9){
        alert('Obesidade! ' + imc.toFixed(2));
    }else if(imc >= 40){
        alert('Obesidade Grave! ' + imc.toFixed(2));
    }
}
    return (
        <View style={styles.container} >

            <Text style={styles.title}> Calcule seu IMC </Text>

            <TextInput
                style={styles.input}
                value={peso}
                onChangeText={ (peso) => setPeso(peso) }
                placeholder="Peso (kg)"
                keyboardType="numeric"

            />



            <TextInput
                style={styles.input}
                value={altura}
                onChangeText={ (altura) => setAltura(altura) }
                placeholder="Altura (cm)"
                keyboardType="numeric"

            />

            <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}

            >
                <Text styles={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

        </View>


    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 30,

    },
    input:{
        backgroundColor: '#121212',
        borderRadius: 10,
        margin: 15,
        padding: 10,
        color: '#FFF',
        fontSize: 23,

    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#41Aef4',
        padding: 10,

    },
    buttonText:{
        color: '#FFF',
        fontSize: 25,
    }


});
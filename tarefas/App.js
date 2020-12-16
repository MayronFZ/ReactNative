import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, StatusBar,
        /*TextInput,*/ TouchableOpacity, FlatList, Animated, Modal, TextInput} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
    const [task, setTask] = useState([
        { key: 1, task: 'Comprar pao' },
        { key: 2, task: 'Dar aquela cagada' },
        { key: 3, task: 'Tomar aquele cafezin' },
        { key: 4, task: 'Matar a formiga' },
        { key: 5, task: 'Tomar aquela vodka' },
    ]);


    const [open, setOpen] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#171d31" barSyle="light-content" />

            <View style={styles.content}>

                <Text style={styles.title}> Minhas Tarefas </Text>

            </View >


            <FlatList
                marginHorizontal={10}
                showsHorizontalScrollIndicator={false}
                data={task}
                keyExtractor={(item) => String(item.key)}
                renderItem={({ item }) => <TaskList data={item} />}
            />

            <Modal animationType="slide" transparent={false} visible={open}>
                <SafeAreaView style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setOpen(false)}>
                            <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="md-arrow-back" size={40} color="#FFF" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle} > Nova Tarefa </Text>
                    </View>

                    <View style={styles.modalBody}>
                        <TextInput 
                        placeholder="O que precisa fazer hoje?"
                        style={styles.input}
                        />
                        <TouchableOpacity style={styles.handleAdd}>
                            <Text style={styles.handleAddText}> Cadastrar </Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </Modal>


            <AnimatedBtn
                style={styles.fab}
                useNativeDriver
                animation="bounceInUp"
                duration={1500}
                onPress={() => setOpen(true)}
            >
                <Ionicons name="ios-add" size={35} color="#FFF" />
            </AnimatedBtn>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171d31'
    },
    title: {
        marginTop: 10,
        paddingBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#FFF'
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#0094FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        right: 25,
        bottom: 25,
        elevation: 2,
        zIndex: 9,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3
        }

    },
    modal:{
        flex:1,
        backgroundColor:'#171d31'
    },
    modalHeader:{
        marginLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalTitle:{
        marginLeft:15,
        fontSize: 23,
        color: '#FFF'
    },
    modalBody:{
        marginTop: 15,
    },
    input:{
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        backgroundColor: '#FFF',
        padding: 9,
        height: 85,
        textAlignVertical: 'top',
        color:'#000',
        borderRadius: 5,
    },
    handleAdd:{
        backgroundColor: '#FFF',
        marginTop: 10, 
        alignItems:  'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 5
    },
    handleAddText:{
        fontSize: 20,
    }

})





























































































/*export default function App() {
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
    if(altura < 140)
    alert('Coloque sua altura em centimetros!')
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


});*/
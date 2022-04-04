import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      LarAnimada: new Animated.Value(0),
      AltAnimada: new Animated.Value(2)

    };
    Animated.sequence([

      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 100,
          duration: 3000,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 70,
          duration: 3000,
          useNativeDriver: false
        }
      )
    ]).start();

  }


  render() {

    let porcentagemAnimate = this.state.LarAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']

    });

    let porcentagem = this.state.AltAnimada.interpolate({
      inputRange: [0, 10],
      outputRange: ['0%', '10%']
    });




    return (
      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor: '#4169E1',
          width: porcentagemAnimate,
          height: porcentagem
        }}>

        </Animated.View>




      </View>
    );
  }





}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
})
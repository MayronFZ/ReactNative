import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

class App extends Component{
  
   constructor(props){
     super(props);
     this.state = {
       numero : 0,
       botao: 'Iniciar',
       ultimo: null
      };
      this.timer = null;
      this.iniciar = this.iniciar.bind(this);
      this.zerar = this.zerar.bind(this);
   }

   iniciar(){
        
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;

        this.setState({botao: 'Iniciar'})
      }else{
        this.timer = setInterval( () => {
          this.setState({numero : this.state.numero + 0.1})
        }, 100);

        this.setState({botao: 'Parar'})
      }
    }

    
   zerar(){
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;
      }
      this.setState({
        ultimo: this.state.numero,
        numero : 0,
        botao: 'Iniciar'
      })
   }


    render(){
      return(
        <View style={styles.container}>
        <Image source={require('./src/cronometro.png')}
        style={styles.cronometro}
        />


        <Text style={ styles.time }> { this.state.numero.toFixed(1) } </Text>
 
        <View style={ styles.btnArea }>

       <TouchableOpacity style={ styles.btn } onPress={this.iniciar}>
         <Text style={styles.btnTexto}>{this.state.botao}</Text>
       </TouchableOpacity>

       <TouchableOpacity style={ styles.btn } onPress={this.zerar}>
         <Text style={styles.btnTexto}>Zerar</Text>
       </TouchableOpacity>

       

        </View>

        <View style={ styles.areaUltimo }>
         <Text style= {styles.textoCorrida}> { this.state.ultimo > 0 ? ' Ultimo Tempo: ' + this.state.ultimo.toFixed(2) + 's' : '' }  </Text>
       </View>

        </View>
      );
    }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  time:{
    marginTop:-160,
    color:'#FFF',
    fontSize: 55,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#FFF',
    height: 40,
    margin: 17,
    borderRadius: 10
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#00aeef'
  },
  areaUltimo:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }


});

export default App;

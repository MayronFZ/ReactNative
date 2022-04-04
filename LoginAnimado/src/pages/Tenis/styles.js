import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
   container:{
       flex: 1,
       width: '100%',
       backgroundColor:'#FFF'
   },
   image:{
       width: '100%',
   },
   header:{
       marginBottom: 8
   },
   textContainer:{
       flexDirection: 'row',
       marginVertical: '5%',
       marginHorizontal: '5%'
   },
   text:{
       fontFamily: 'RussoOne_400Regular',
       fontSize: 21,
       marginHorizontal:'1%' ,
   },
   line:{
       borderBottomColor: '#D8d8d8',
       borderBottomWidth: 3,
   }
});
export default styles;
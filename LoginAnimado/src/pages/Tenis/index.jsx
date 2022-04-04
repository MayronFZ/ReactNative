import React from 'react';
import { MaterialIcons} from '@expo/vector-icons';
import { View, Text,  ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import Shoes from '../../component/Shoes';

export default function Tenis() {
 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Image
       source={require('../../assets/banner.png')}
       style={styles.image}
       />
       <View style={styles.textContainer}>
         <Text style={styles.text}>TÊNIS</Text>
         <Text style={[styles.text,{ color: '#CECECF' }]}>-</Text>
         <Text style={[styles.text,{ color: '#CECECF' }]}>MASCULINO</Text>
         <TouchableOpacity style={{position: 'absolute',  right: 10, alignSelf:'center'}}>
           <MaterialIcons
            name="filter-list"
            size={28}
            color="black"
           />
         </TouchableOpacity>
       </View>
     </View>

     <View style={styles.line}/>

     <ScrollView>
       <Text style={styles.text}>LANÇAMENTOS</Text>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
         <Shoes img={require('../../assets/1.png')} cost="R$140,90">
           Nike Air Max Dia
         </Shoes>

         <Shoes img={require('../../assets/2.png')} cost="R$280,90">
           Nike Downshifter 10
         </Shoes>
         
         
       </View>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
         <Shoes img={require('../../assets/3.png')} cost="R$780,00">
           Nike Squidward Tentacles
         </Shoes>

         <Shoes img={require('../../assets/4.png')} cost="R$437,99">
           Nike Epic React Flyknit 2
         </Shoes>
         
       </View>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
         <Shoes img={require('../../assets/5.png')} cost="R$125,70">
           Nike SpongeBob SquareShirt
         </Shoes>

         <Shoes img={require('../../assets/6.png')} cost="R$900,99">
           Nike LongeRange Saphire
         </Shoes>
         
         
       </View>

     </ScrollView>

      


   </View>
  );
}
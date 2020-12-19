import React from 'react';
import { MaterialIcons} from '@expo/vector-icons';
import { View, Text,  ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home() {
 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Image
       source={require('../../assets/banner.png')}
       style={styles.image}
       />
       <View style={styles.textContainer}>
         <Text style={styles.text}>TÊNIS</Text>
         <Text style={styles.text}>-</Text>
         <Text style={styles.text}>MASCULINO</Text>
         <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf:'center'}}>
           <MaterialIcons
            name="filter-list"
            size={24}
            color="black"
           />
         </TouchableOpacity>
       </View>
     </View>

   </View>
  );
}
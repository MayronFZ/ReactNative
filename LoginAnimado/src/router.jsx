import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Tenis,Login,Detail,Home} from './pages';

const Stack = createStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title:"Bem Vindo",
              hearderTintColor:'#000',
              headerTintStyle:{fontWeight:'bold', alignSelf:'center'}
            }}         
            
            />

            <Stack.Screen 
            name="Detail"
            component={Detail}
            />
            
            <Stack.Screen 
            name="Tenis"
            component={Tenis}
            />
        </Stack.Navigator>
    </NavigationContainer>



  );
}
 
export default Routes;
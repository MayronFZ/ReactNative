import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';


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
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Detail"
            component={Detail}
            />
        </Stack.Navigator>
    </NavigationContainer>



  );
}
 
export default Routes;
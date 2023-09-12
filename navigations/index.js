import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import Home from '../screens/home'
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import About from '../screens/about'

const Stack = createStackNavigator();

const Home_Navigation = ()=> {
  return (
    <Stack.Navigator
     initialRouteName='About'
     style={{paddingTop:40,}}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Quiz" 
        component={Quiz} 
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Result" 
        component={Result} 
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen 
        name="About" 
        component={About} 
        options={{
            headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Home_Navigation;
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Home_Navigation from './navigations/index'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <Home_Navigation/>
    </NavigationContainer>
  );
}

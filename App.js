import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './Screens/Main';
import { Login } from './Screens/Login';
import { cart } from './Screens/Cart';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View >
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Products" component={Main}></Stack.Screen>
        <Stack.Screen name="cart" component={cart}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

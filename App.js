import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './screens/Main';
import { Login } from './screens/Login';
import Cart from "./screens/Cart"

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Products" component={Main}></Stack.Screen>
        <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

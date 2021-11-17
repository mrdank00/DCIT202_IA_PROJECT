import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "./screens/Main";
import { Login } from "./screens/Login";
import Cart from "./screens/Cart";
import { ProductsList } from "./screens/Productdetail";

//importing React redux packages
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./redux";
import ProductDetails from "./screens/Productdetail";

export default function App() {
  const Stack = createStackNavigator();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Products" component={Main}></Stack.Screen>
        <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

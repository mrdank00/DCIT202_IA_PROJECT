import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

export function Main(params) {
    const navigation = params.navigation;
    return (
      <View style={{flex:1}}>
        <view style={{flex:1, flexDirection:'row-reverse'}}>
        <TouchableOpacity style={{flexDirection:'row-reverse'}}> 
          <Entypo name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </view>
        
        <view style={{padding:200}}>
          <TouchableOpacity style={{padding:20,backgroundColor:'black',borderRadius:20}}>
            <text
            onPress={() => {
              navigation.navigate("cart");
            }}
             style={{paddingLeft:400,color:'whitesmoke',fontWeight:'Bold'}}>Checkout</text>
          </TouchableOpacity>
        </view>
        <view>
       
        
        </view>
      </View>
      
    );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
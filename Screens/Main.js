import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Entypo } from '@expo/vector-icons';
import axios from "axios";

export function Main({navigation}) {

  const [ , setProducts] = useState();

useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then(data => console.log(data)).catch(err => alert(err.message))
}, [])

    return (
    <View style={{flex:1}}>
          <View style={{flexDirection:'row', flexBasis:'20%',justifyContent:"space-between",alignItems:'center', paddingHorizontal:20}}>
            <Text style={{fontWeight:'bold', fontSize: 18}}>Products</Text>
            <TouchableOpacity  style={{}}> 
              <Entypo name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
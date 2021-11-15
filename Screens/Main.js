import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons';
import axios from "axios";

import Product from "../components/Product";

export function Main({navigation}) {

  const [ products, setProducts] = useState();

useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then(data => setProducts(data.data)).catch(err => alert(err.message))
}, [])

    return (
    <View style={{flex:1}}>
          <View style={{flexDirection:'row', flexBasis:'15%',justifyContent:"space-between",alignItems:'center', paddingHorizontal:20}}>
            <Text style={{fontWeight:'bold', fontSize: 18,color:'black'}}>Products</Text>
            <TouchableOpacity  style={{}}> 
              <Entypo name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
            <View>

            </View>
          </View> 
          <ScrollView style={{flexDirection:'row'}}>
          {products && products.map(({id, title, price, image}) => (
            <Product key={id} title={title} price={price} image={image}/>
          ))}
          </ScrollView>
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
  cearchcontainer:{
    height:50,
    backgroundColor:'grey',
    borderRadius:10,
    flex:1,
    flexDirection:'row'
    
  }
});
import React from 'react'
import { StyleSheet, Text, View,Image,ImageBackground,label, TouchableOpacity } from 'react-native'

const Product = ({ title, id, price, image }) => {
    return (
        <View>
            <View>
                <TouchableOpacity>
                <ImageBackground
                source={image}
                style={{
                    borderRadius: 20,
                    marginBottom: 30,
                    width: 200,
                    height: 200,
                  }} >
            </ImageBackground>
            <Text style={{fontWeight:'bold'}}>{title}</Text>
            <Text>${price}</Text>
                </TouchableOpacity>
            
            </View>
           
            
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    imagestyle:{
        borderRadius: 20,
        marginBottom: 60,
        width: 200,
        height: 200,
        }
})

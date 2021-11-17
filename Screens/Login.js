import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "20deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://th.bing.com/th/id/OIP.4FvZFCRWNilKcwQLcWpa0wHaHa?pid=ImgDet&w=512&h=512&rs=1",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>All needs Shop</Text>
      {<View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username"
        />
      </View>}
      {<View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View>}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Products");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
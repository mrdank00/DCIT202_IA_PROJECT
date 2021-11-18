import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { addCart } from "../actions/index";
import Product from "../components/Product";

function ProductDetail({ route, navigation }) {
  const { id, retailPrice, title, media, year, brand, gender } = route.params;
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addCart({}));
  };

  const [products, setProducts] = useState([]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "White",
      }}
    >
      <View style={style.header}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "White",
            }}
          >
            Product details
          </Text>
        </View>
        <Entypo
          name="shopping-cart"
          size={30}
          style={{ marginTop: 5 }}
          color="black"
          onPress={() => navigation.navigate("Cart")}
        />
      </View>
      <View style={{ flexBasis: "70%", justifyContent: "space-around" }}>
        <Image
          style={style.imagestyle}
          source={{ uri: media.imageUrl }}
        ></Image>
        <Text style={style.categoryText}>{title}</Text>
        <Text style={style.categoryText}>${retailPrice}</Text>
      </View>

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
          backgroundColor: "red",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Add To Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 30,
    color: "grey",
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: "lightgreen",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "lightgreen",
  },
  card: {
    height: 225,
    backgroundColor: "#fff",
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  imagestyle: {
    borderRadius: 20,
    marginRight: 80,
    width: 400,
    height: 200,
    padding: 20,
    flexBasis: "60%",
    justifyContent: "center",
  },
});

export default ProductDetail;

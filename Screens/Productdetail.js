import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  FlatList,
  StyleSheet,
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

  function renderProduct({ item: product }) {
    return (
      <SafeAreaView>
        {/* Stucture and styles for the product details */}
      </SafeAreaView>
    );
  }

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

      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
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
    fontSize: 16,
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
});

export default ProductDetail;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import Product from "../components/Product";

export function Main({ navigation }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
      params: { limit: 20 },
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "d3456c96a9mshb62066b1e421ea0p1749acjsna406b9a86a1f",
      },
    };

    //setting the products data back from the api to the products state
    axios
      .request(options)
      .then((data) => setProducts(data.data.results))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          flexBasis: "15%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>
          Products
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={{}}
        >
          <Entypo name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
        <View></View>
      </View>
      <ScrollView style={{ flexDirection: "row" }}>
        {products &&
          products.map((product) => (
            <Product
              submit={() =>
                navigation.navigate("ProductDetails", {
                  ...product,
                }) && products.length
              }
              key={product.id}
              id={product.id}
              image={product.media.imageUrl}
              title={product.title}
              price={product.retailPrice}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cearchcontainer: {
    height: 50,
    backgroundColor: "grey",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
  },
});

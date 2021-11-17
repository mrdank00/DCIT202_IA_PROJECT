import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <SafeAreaView>
      <View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "black",
              paddingHorizontal: 20,
              justifyContent: "space-evenly",
            }}
          >
            Cart
          </Text>
        </View>
        {cart &&
          cart.map((car) => (
            <CartItems
              id={car.id}
              key={uuid.v4()}
              image={car.thumbUrl}
              price={car.retailPrice}
              title={car.title}
              quant={car.quantity}
            />
          ))}
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});

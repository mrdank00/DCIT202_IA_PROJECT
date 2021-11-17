import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <View>
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
  );
};

export default Cart;

const styles = StyleSheet.create({});

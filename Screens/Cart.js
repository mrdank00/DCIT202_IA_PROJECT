import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

function addItemToCart(id) {
  const product = getProduct(id);
  setItems((prevItems) => {
    const item = prevItems.find((item) => item.id == id);
    if (!item) {
      return [
        ...prevItems,
        {
          id,
          qty: 1,
          product,
          totalPrice: product.price,
        },
      ];
    } else {
      return prevItems.map((item) => {
        if (item.id == id) {
          item.qty++;
          item.totalPrice += product.price;
        }
        return item;
      });
    }
  });
}

function getItemsCount() {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

function getTotalPrice() {
  return items.reduce((sum, item) => sum + item.totalPrice, 0);
}

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
      <CartContext.Provider
        value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}
      >
        {props.children}
      </CartContext.Provider>
      );
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});

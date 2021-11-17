import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  label,
  TouchableOpacity,
} from "react-native";

const Product = ({ submit, title, id, price, image }) => {
  return (
    <TouchableOpacity onPress={submit}>
      <View>
        <TouchableOpacity>
          <Image style={styles.imagestyle} source={{ uri: image }}></Image>
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
          <Text>${price}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  imagestyle: {
    borderRadius: 20,
    marginBottom: 60,
    width: 400,
    height: 200,
    padding: 20,
  },
});

export default Product;

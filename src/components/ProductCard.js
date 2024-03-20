import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProductCard = ({ name, productPrice, productImage }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: productImage }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{productPrice}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 5, 
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});

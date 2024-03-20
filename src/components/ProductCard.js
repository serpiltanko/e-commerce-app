import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const ProductCard = ({ name, productPrice, productImage, productDescription  }) => {
const navigation =useNavigation();

  return (
    <TouchableOpacity style={styles.container}
     onPress={()=>navigation.navigate("Detail", {
      name: name,
      price: productPrice,
      image: productImage,
      description: productDescription
      
    })}>
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

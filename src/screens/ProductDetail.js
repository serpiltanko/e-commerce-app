import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    navigation.navigate("MyCart", { image, name, price });
  };
  
  const { name, image, description, price } = route.params;
  console.log(route.params);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={addToCart}>
          <Text style={styles.buttonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 5,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#888",
    backgroundColor: "white",
    height: 420,
    marginVertical: 10,
  },
  image: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 5,
  },
  nameContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    color: "#00A4CC",
  },
  descriptionContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    padding: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    padding: 16,
  },
  priceContainer: {
    borderWidth: 1,
    borderColor: "#00A4CC",
    borderRadius: 15,
    padding: 16,
  },
  price: {
    color: "#00A4CC",
    fontWeight: "800",
    fontSize: 18,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#00A4CC",
    borderRadius: 15,
    padding: 16,
    backgroundColor: "#00A4CC",
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 18,
    color: "white",
  },
});

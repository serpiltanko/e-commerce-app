import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "./CartContext";
import { AntDesign } from "@expo/vector-icons";

const MyCartScreen = () => {
  const { cartItems, emptyCart } = useCart();

  const navigation = useNavigation();

  const handleBuy = () => {

    emptyCart();
    alert("Satın alma işleminiz başarıyla tamamlanmıştır.");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View>
        {cartItems.length === 0 ? (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>
              Sepetinizde Ürün Bulunmamaktadır.
            </Text>
            <AntDesign
              style={styles.emptyCartImage}
              name="shoppingcart"
              size={100}
              color="#00A4CC"
            />
          </View>
        ) : (
          cartItems.map((item, index) => (
            <View key={index} style={styles.productContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          ))
        )}
      </View>

      {/* buttonArea */}
      <View>
        {cartItems.length === 0 ? (
          <View>
            <Text></Text>
          </View>
        ) : (
          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleBuy}>
                  Satın Al
                </Text>
              </TouchableOpacity>
            </View>

           

            <View style={styles.shoppingButtonContainer}>
              <TouchableOpacity
                style={styles.shoppingButton}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.shoppingButtonText}>
                  Alışverişe Devam Et
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyCartContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 170,
    paddingHorizontal: 16,
  },
  emptyCartText: {
    color: "grey",
    fontSize: 20,
    fontWeight: "500",
  },
  emptyCartImage: {
    marginTop: 50,
  },
  productContainer: {
    flexDirection: "row",
    width: "95%",
    height: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    borderColor: "#91A4CC",
  },
  imageContainer: {
    marginVertical: 15,
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  textContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  nameContainer: {
    paddingVertical: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
  },
  priceContainer: {},
  price: {
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#00A4CC",
    borderRadius: 15,
    backgroundColor: "#00A4CC",
    padding: 10,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 16,
    color: "white",
  },
  shoppingButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  shoppingButton: {
    width: "50%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    backgroundColor: "grey",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  shoppingButtonText: {
    fontWeight: "700",
    fontSize: 15,
    color: "white",
  },
});

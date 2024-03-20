import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import PRODUCT from "../../data/data.json";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  const products = PRODUCT.products;
  function renderProduct(itemData) {
    console.log(itemData.item.name);
    return (
      <ProductCard
        name={itemData.item.name}
        productPrice={itemData.item.price}
        productImage={itemData.item.image}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        horizontal={false}
        style={styles.flatListStyle}
      />
    </View>
  );
};

export default ProductCardList;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom:"auto",
  },
  flatListStyle:{
    marginBottom:150,
  }
});

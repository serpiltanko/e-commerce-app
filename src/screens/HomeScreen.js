import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";

import ProductCardList from "../components/ProductCardList";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <SearchBar />
      <ProductCardList />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

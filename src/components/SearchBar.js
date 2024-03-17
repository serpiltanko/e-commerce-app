import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
  
      <SafeAreaView style={styles.container}>
        <AntDesign
          style={styles.iconStyle}
          name="search1"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ara"
          autoCorrect={false}
        />
      </SafeAreaView>
   
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    marginTop: 70,
    marginHorizontal:15,

    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});

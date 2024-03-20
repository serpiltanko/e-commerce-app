import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyBottomTabNavigator from "./MyBottomTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={MyBottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Ana Sayfa",
          headerTitleAlign: "center",
        }}
      />
        <Stack.Screen
        name="Detail"
        component={ProductDetail}
        options={{
          headerTitle: "Ürün Detayı",
          headerTitleAlign: "center",
        }}
           />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});

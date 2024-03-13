import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyBottomTabNavigator from "./MyBottomTabNavigator";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (  
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={MyBottomTabNavigator}  options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});

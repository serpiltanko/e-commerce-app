import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MyCartScreen from "../screens/MyCartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MyBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        tabBarLabelStyle: { fontSize: 20 }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Anasayfa",
          tabBarLabelStyle: { fontSize: 13 },

          tabBarIcon: () => {
            return (
              <View>
                <AntDesign name="home" size={26} color="black" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyCart"
        component={MyCartScreen}
        options={{
          title: "Sepetim",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: () => {
            return (
              <View>
                <AntDesign name="shoppingcart" size={26} color="black" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profilim",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: () => {
            return (
              <View>
                <FontAwesome6 name="user" size={24} color="black" />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTabNavigator;

const styles = StyleSheet.create({});

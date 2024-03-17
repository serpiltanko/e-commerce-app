import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./HomeStackNavigator";
import LoginAccountScreen from "../screens/LoginAccountScreen";
import { auth } from "../../firebase";

const Stack = createNativeStackNavigator();

const Routes = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, [initializing]);

  if (initializing) return null;


  return (
    <NavigationContainer>
      <Stack.Navigator>
      {user ? (
          <Stack.Screen
            name="HomeStack"
            component={HomeStackNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginAccountScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});

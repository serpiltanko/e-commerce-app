import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from './HomeStackNavigator';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator >
     
        <Stack.Screen
          name="HomeRoutes"
          component={HomeStackNavigator}
          options={{ headerShown: false }}
        />
    
     
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})
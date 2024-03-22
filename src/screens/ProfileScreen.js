import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>E-mail: {auth.currentUser?.email} </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  button: {
    backgroundColor: "#00A4CC",
    alignItems: "center",
    borderRadius: 10,
    width: "60%",
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    padding: 15,
  },
});

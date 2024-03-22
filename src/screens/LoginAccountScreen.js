import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { FontAwesome5 } from "@expo/vector-icons";

const LoginAccountScreen = () => {
  const [email, setEmail] = useState("serpil@gmail.com");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı", user.email);
      })
      .catch((error) => alert(error.message));
  };

  handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı giriş yaptı", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.inputPasswordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Şifre"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={togglePasswordVisibility}
          >
            {showPassword ? (
              <FontAwesome5 name="eye-slash" size={24} color="grey" />
            ) : (
              <FontAwesome5 name="eye" size={24} color="grey" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outlineButton} onPress={handleSignUp}>
          <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
  inputPasswordContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
  inputPassword: {
    backgroundColor: "white",
  },
  icon: {
    flexDirection: "row",
    paddingLeft: 200,
  },
  buttonContainer: {
    width: "60%",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#00A4CC",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  outlineButton: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  outlineButtonText: {
    color: "#00A4CC",
    fontSize: 16,
    fontWeight: "700",
  },
});

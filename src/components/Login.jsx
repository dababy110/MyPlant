import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Constants from "expo-constants";

const Login = ({ handleLogin, handleLoginValues }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePressLogin = () => {
    handleLogin({ email, password });
    handleLoginValues({ email, password });
  }

  return (
    <View style={styles.Container}>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "semibold", fontSize: 25 }}>
          Hi, Welcome Back! 👋
        </Text>
        <Text style={{ opacity: 0.5 }}>Hello again, you've been missed</Text>
      </View>

      <View style={styles.formContainer}>
        <View>
          <Text>Email: </Text>
          <TextInput
            style={styles.TextInputs}
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(value) => setEmail(value)}
          ></TextInput>
        </View>

        <View>
          <Text>Password: </Text>
          <TextInput
            style={styles.TextInputs}
            placeholder="Enter your password"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePressLogin}>
          <Text
            style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>
          Don't Have an account?
          <TouchableOpacity>
            <Text
              style={{ fontWeight: "bold", color: "#6a6ce0", marginLeft: 5 }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },
  Text: {
    fontSize: 50,
    fontWeight: "600",
    color: "#006414",
  },
  formContainer: {
    gap: 20,
    width: 280,
  },
  button: {
    backgroundColor: "#6a6ce0",
    padding: 13,
    borderRadius: 9,
  },
  textContainer: {},
  TextInputs: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 9,
  },
});

export default Login;

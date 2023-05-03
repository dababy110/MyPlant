import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Constants from "expo-constants";

import { AntDesign } from "@expo/vector-icons";

const SignUp = ({ handleSignUp, handleSignUpValues }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePressSignUp = () => {
    handleSignUp({ email, password });
    handleSignUpValues({ email, password });
  }

  return (
    <View style={styles.Container}>
      <View>
        <Text style={{ fontWeight: 600, fontSize: 25 }}>Create an account</Text>
        <Text style={{ opacity: 0.5 }}>Connect with your device</Text>
      </View>

      <View style={styles.formContainer}>
        <View>
          <Text style={{ color: "#6a6ce0", fontWeight: "500" }}>Email: </Text>
          <TextInput
            style={styles.TextInputs}
            placeholder="Enter your email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            ></TextInput>
        </View>

        <View>
          <Text style={{ color: "#6a6ce0", fontWeight: "500" }}>Password:</Text>
          <TextInput
            style={styles.TextInputs}
            placeholder="Enter your password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePressSignUp}>
          <Text
            style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonsSignUpContainer}>
        <Text>Or With</Text>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 9,
              width: "40%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <AntDesign name="google" size={18} color="black" />
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 9,
              width: "40%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <AntDesign name="github" size={18} color="black" />
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Github
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>
          Already have an account?
          <TouchableOpacity>
            <Text
              style={{ fontWeight: "bold", color: "#6a6ce0", marginLeft: 5 }}
            >
              Login
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
  TextInputs: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 9,
  },
  ButtonsSignUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});

export default SignUp;

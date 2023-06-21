import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

import { firebase } from "../../../firebase-config";

import { useNavigation } from "@react-navigation/native";

import { AntDesign, Fontisto, EvilIcons, FontAwesome5 } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ScrollView
      style={{ marginTop: Constants.statusBarHeight, padding: 40, gap: 50 }}
    >
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <Text style={{ fontSize: 35, fontWeight: "500", color: "#0D986A" }}>
          Welcome Back!
        </Text>
        <Text style={{ marginLeft: 5, color: "#999999", fontSize: 18 }}>
          Enter your credentials to continue.
        </Text>
      </View>
      <View style={{ marginTop: Constants.statusBarHeight, gap: 15 }}>
        <View style={styles.inputContainer}>
          <Fontisto
            name="email"
            size={24}
            color="#B1B1B1"
            style={styles.icon}
          />
          <TextInput
            style={{ marginLeft: 37, flex: 1, height: 50 }}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            placeholder="Email Address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <EvilIcons name="lock" size={30} color="#B1B1B1" />
          <TextInput
            style={{ marginLeft: 5, flex: 1, height: 50 }}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#0D986A",
            padding: 18,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => loginUser(email, password)}
        >
          <Text style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Text style={{ color: "#B1B1B1", fontWeight: 600 }}>
            Or connect via
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                width: 100,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#DDDDDD",
              }}
            >
              <AntDesign name="google" size={24} color="#0D986A" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                width: 100,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#DDDDDD",
              }}
            >
              <FontAwesome5 name="facebook" size={24} color="#0D986A" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                width: 100,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#DDDDDD",
              }}
            >
              <AntDesign name="github" size={24} color="#0D986A" />
            </TouchableOpacity>
          </View>
          <Text style={{ color: "#B1B1B1", fontWeight: 600 }}>
            Don’t have an account?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text
                style={{
                  marginLeft: 7,
                  color: "#0D986A",
                  textDecorationLine: "underline",
                  fontWeight: 600,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
  input: {
    marginLeft: 30,
    flex: 1,
    height: 50,
  },
});

export default Login;

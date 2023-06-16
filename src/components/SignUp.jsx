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
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SignUp = ({ handleSignUp, handleSignUpValues }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePressSignUp = () => {
    handleSignUp({ email, password });
    handleSignUpValues({ email, password });
  }

  return (
    <View style={{ marginTop: Constants.statusBarHeight, padding: 40, gap: 50, paddingTop: 50, }}>
      <View>
        <Text style={{ fontSize: 35, fontWeight: '500', color: "#0D986A", }}>Create account</Text>
        <Text style={{ marginLeft: 5, color: "#999999", fontSize: 18, }}>Register to get started.</Text>
      </View>
      <View style={{ gap: 15, }}>
        <View style={styles.inputContainer}>
          <Ionicons name="ios-person-circle-sharp" size={29} color="#B1B1B1" />
          <TextInput style={{ marginLeft: 5, flex: 1, height: 50, }} keyboardType="default" placeholder="Name" />
        </View>
        <View style={styles.inputContainer}>
          <Fontisto name="email" size={24} color="#B1B1B1" style={styles.icon} />
          <TextInput style={{ marginLeft: 37, flex: 1, height: 50, }} keyboardType="email-address" placeholder="Email Address" />
        </View>
        <View style={styles.inputContainer}>
          <EvilIcons name="lock" size={30} color="#B1B1B1" />
          <TextInput style={{ marginLeft: 5, flex: 1, height: 50, }} secureTextEntry={true} placeholder="Password" />
        </View>
        <View style={styles.inputContainer}>
          <EvilIcons name="lock" size={30} color="#B1B1B1" />
          <TextInput style={{ marginLeft: 5, flex: 1, height: 50, }} secureTextEntry={true} placeholder="Confirm Password" />
        </View>
        <TouchableOpacity style={{ backgroundColor: "#0D986A", padding: 18, alignItems: "center", borderRadius: 10, marginTop: 20, }}>
          <Text style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ alignItems: "center", gap: 10, }}>
          <Text style={{ color: "#B1B1B1", fontWeight: 600,}}>Or connect via</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#fff", width: 100, height: 50, borderRadius: 10, borderWidth: 2, borderColor: "#DDDDDD", }}><AntDesign name="google" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#fff", width: 100, height: 50, borderRadius: 10, borderWidth: 2, borderColor: "#DDDDDD", }}><AntDesign name="google" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#fff", width: 100, height: 50, borderRadius: 10, borderWidth: 2, borderColor: "#DDDDDD", }}><AntDesign name="google" size={24} color="black" /></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  input: {
    marginLeft: 30,
    flex: 1,
    height: 50,
  },
});

export default SignUp;
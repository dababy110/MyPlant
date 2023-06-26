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

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: "https://myplant-a9731.firebaseapp.com",
        })
          .then(() => {
            alert("Verification email sent");
          })
            .catch((error) => {
              alert("Verification email failed " + error);
            })
            .then(() => {
              firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                  firstName,
                  lastName,
                  email,
                });
            })
            .catch((error) => {
              alert(error.message);
            });
      })
      .catch(( error => {
        alert(error.message);
      }));
  };

  return (
    <ScrollView
      style={{ marginTop: Constants.statusBarHeight, padding: 40, gap: 50 }}
    >
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <Text style={{ fontSize: 35, fontWeight: "500", color: "#0D986A" }}>
          Create account
        </Text>
        <Text style={{ marginLeft: 5, color: "#999999", fontSize: 18 }}>
          Register to get started.
        </Text>
      </View>

      <View style={{ marginTop: Constants.statusBarHeight, gap: 15 }}>
        <View style={styles.inputContainer}>
          <Ionicons name="ios-person-circle-sharp" size={29} color="#B1B1B1" />
          <TextInput
            style={{ marginLeft: 5, flex: 1, height: 50 }}
            keyboardType="default"
            placeholder="Name"
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="ios-person-circle-sharp" size={29} color="#B1B1B1" />
          <TextInput
            style={{ marginLeft: 5, flex: 1, height: 50 }}
            keyboardType="default"
            placeholder="Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Fontisto
            name="email"
            size={24}
            color="#B1B1B1"
            style={styles.icon}
          />
          <TextInput
            style={{ marginLeft: 37, flex: 1, height: 50 }}
            keyboardType="email-address"
            placeholder="Email Address"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputContainer}>
          <EvilIcons name="lock" size={30} color="#B1B1B1" />
          <TextInput
            style={{ marginLeft: 5, flex: 1, height: 50 }}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        {/*<View style={styles.inputContainer}>
          <EvilIcons name="lock" size={30} color="#B1B1B1" />
          <TextInput
            style={{ marginLeft: 5, flex: 1, height: 50 }}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          </View> */}

        <TouchableOpacity
          style={{
            backgroundColor: "#0D986A",
            padding: 18,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => registerUser(email, password, firstName, lastName)}
        >
          <Text style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>
            Sign Up
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
            Already have an account?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
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
                Log In
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

export default SignUp;

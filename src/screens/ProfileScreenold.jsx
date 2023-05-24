import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { firebase } from "../../firebase-config";

import Login from "../components/Login";
import SignUp from "../components/SignUp";
import ProfileLoggedScreen from "./ProfileLoggedScreen";

import { Feather, Ionicons } from "@expo/vector-icons";

import * as Animatable from "react-native-animatable";

const SlideUpView = Animatable.createAnimatableComponent(View);

const ProfileScreen = () => {
  const [showComponentLogin, setShowComponentLogin] = useState(false);
  const [showComponentSignUp, setShowComponentSignUp] = useState(false);

  const [loginValues, setLoginValues] = useState("");
  const [signUpValues, setSignUpValues] = useState("");

  const [user, setUser] = useState(null);

  const handlePressLogin = () => {
    setShowComponentLogin(!showComponentLogin);
  };

  const handlePressSignUp = () => {
    setShowComponentSignUp(!showComponentSignUp);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(loginValues.email, loginValues.password);
      setUser(userCredential.user);
      handlePressLogin();
    } catch (error) {
      alert("Your email or password is incorrect. Please try again", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(signUpValues.email, signUpValues.password);
      setUser(userCredential.user);
      handlePressSignUp();
    } catch (error) {
      console.log("Error al crear cuenta", error);
    }
  };

  return (
    <View style={styles.Container}>
      {!user && (
        <>
          <View>
            <Text style={{ fontSize: 40, fontWeight: 600 }}>Profile </Text>
            <Text style={{ fontSize: 18, opacity: 0.5 }}>
              Log in to start to use your machine
            </Text>
          </View>
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
          >
            <TouchableOpacity
              onPress={handlePressLogin}
              style={{
                backgroundColor: "#6a6ce0",
                padding: 13,
                borderRadius: 9,
                width: 300,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Login in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handlePressSignUp}
              style={{
                backgroundColor: "#6a6ce0",
                padding: 13,
                borderRadius: 9,
                width: 300,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {user && <ProfileLoggedScreen props={{ user }} />}

      {!user && (
        <View>
          <TouchableOpacity style={styles.settingsProfile}>
            <Feather name="help-circle" size={24} color="black" />
            <Text>Accessibility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsProfile}>
            <Feather name="help-circle" size={24} color="black" />
            <Text>Get help</Text>
          </TouchableOpacity>
        </View>
      )}

      {showComponentSignUp && (
        <SlideUpView
          animation="slideInUp"
          style={{
            backgroundColor: "#fff",
            height: "90%",
            width: "100%",
            position: "absolute",
            marginLeft: -50,
            marginTop: 50,
            padding: 30,
            borderRadius: 30,
          }}
        >
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={handlePressSignUp}>
              <Ionicons
                name="md-close-circle-sharp"
                size={28}
                color="#6a6ce0"
              />
            </TouchableOpacity>
          </View>
          <SignUp handleSignUp={handleSignUp} handleSignUpValues={setSignUpValues} />
        </SlideUpView>
      )}

      {showComponentLogin && (
        <SlideUpView
          animation="slideInUp"
          style={{
            backgroundColor: "#fff",
            height: "90%",
            width: "100%",
            position: "absolute",
            marginLeft: -50,
            marginTop: 50,
            padding: 30,
            borderRadius: 30,
          }}
        >
          <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={handlePressLogin}>
              <Ionicons
                name="md-close-circle-sharp"
                size={28}
                color="#6a6ce0"
              />
            </TouchableOpacity>
          </View>
          <Login handleLogin={handleLogin} handleLoginValues={setLoginValues} />
        </SlideUpView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginLeft: 50,
    alignItems: "flex-start",
    justifyContent: "space-around",
    gap: 30,
    height: "100%",
    width: "100%",
  },
  settingsProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    margin: 10,
    paddingBottom: 10,
    width: 298,
  },
});

export default ProfileScreen;

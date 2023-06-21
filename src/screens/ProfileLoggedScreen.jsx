import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import Constants from "expo-constants";

import { firebase } from "../../firebase-config";

const width = Dimensions.get("window").width;

const ProfileLoggedScreen = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/img/ProfileLoggedBg.png")}
      resizeMode="cover"
      style={{ width: width, height: "100%" }}
    >
      <View style={{ marginTop: Constants.statusBarHeight, padding: 40, paddingTop: 80, alignItems: "center", justifyContent: "center",}}>
        <Image source={require("../../assets/img/defaultUserImage.png")} style={{ width: 150, height: 150,}}/>
        <Text style={{ marginTop: 10,fontSize: 30, color: "#0D986A", fontWeight: 500, }}>
          {name.firstName} {name.lastName}
        </Text>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
          }}
        >
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ProfileLoggedScreen;

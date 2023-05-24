import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Constants from "expo-constants";

import { useNavigation } from "@react-navigation/native";

import { firebase } from "../../firebase-config";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View>
        <View>
          <Text>Bienvenido De Nuevo</Text>
          <Text>Ingresa tus credenciales para continuar</Text>
      </View>
      <View>
          <TextInput 
            
          />
          <TextInput 

          />
      </View>
    </View>
  );
};

export default Login;

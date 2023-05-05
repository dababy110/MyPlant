import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyD2XDBNWVvNSjA5Xn0l2EfUFCb8vQwEsBM",
  authDomain: "myplant-a9731.firebaseapp.com",
  databaseURL: "https://myplant-a9731-default-rtdb.firebaseio.com",
  projectId: "myplant-a9731",
  storageBucket: "myplant-a9731.appspot.com",
  messagingSenderId: "836700780435",
  appId: "1:836700780435:web:2cb4c9b71b5751960b9a66",
  measurementId: "G-Y9NPXYP0V0",
};

import * as Animatable from "react-native-animatable";

const SlideUpView = Animatable.createAnimatableComponent(View);

const app = initializeApp(firebaseConfig);

db = getDatabase(app);


const MyPlant = () => {
  const [ledStatus, setLedStatus] = useState(null);
  const [analogStatus, setAnalogStatus] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const analogStatusRef = ref(db, "analogStatus");
    onValue(analogStatusRef, (snapshot) => {
      const data = snapshot.val();
      setAnalogStatus(data);
    });
  }, []);

  const handleTurnOnLed = () => {
    const ledStatusRef = ref(db, "ledStatus");
    set(ledStatusRef, 1);
    setLedStatus("on");
  };

  const handleTurnOffLed = () => {
    const ledStatusRef = ref(db, "ledStatus");
    set(ledStatusRef, 0);
    setLedStatus("off");
  };

  const handleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Status</Text>
        <Text>Estado del led: {ledStatus}</Text>
        <View style={styles.containerButtons}>
          <Button onPress={handleTurnOnLed} title="Encender LED" />
          <Button onPress={handleTurnOffLed} title="Apagar LED" />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>AnalogStatus</Text>
        <Text>Medicion con el potenciometro: </Text>
        <Text style={{ marginTop: 20, fontSize: 45 }}>{analogStatus}</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity>
          <Text style={styles.textSection}>Planta de Tomate</Text>
          <Image
            style={styles.imgStack}
            source={require("../../assets/img/imagen-2.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={handleComponent}>
          <Text style={styles.textSection}>Planta de Aguacate</Text>
          <Image
            style={styles.imgStack}
            source={require("../../assets/img/imagen-2.png")}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.test}>
          <Text>aa</Text>
        </View> */}
      {showComponent && (
        <SlideUpView
          animation="slideInUp"
          style={{
            backgroundColor: "#fff",
            height: "100%",
            width: 410,
            position: "absolute",
            marginLeft: -50,
            marginTop: 100,
            padding: 30,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              width: "100%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity onPress={handleComponent}>
              <Ionicons
                name="md-close-circle-sharp"
                size={28}
                color="#6a6ce0"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 30,
              textAlign: "left",
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            Planta De Aguacate
          </Text>
          <View style={{ gap: 20, marginTop: 30 }}>
            <Text style={{ fontSize: 20 }}>Humedad: 20</Text>
            <Text style={{ fontSize: 20 }}>Temperatura: 20</Text>
            <Text style={{ fontSize: 20 }}>Luz: 20</Text>
          </View>
        </SlideUpView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    borderRadius: 10,
  },
  test: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 200,
    right: 40,
    width: 300,
    height: 300,
    borderRadius: 9,
  },
  container: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
    width: "100%",
  },
  card: {
    marginTop: 10,
    padding: 30,
    flexDirection: "colum",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  title: {
    fontWeight: 600,
    fontSize: 30,
  },
  containerButtons: {
    marginTop: 20,
    flexDirection: "row",
  },
  section: {
    marginTop: 10,
    padding: 25,
    flexDirection: "colum",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  textSection: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
  imgStack: {
    marginTop: 10,
    width: 120,
    height: 120,
  },
});

export default MyPlant;

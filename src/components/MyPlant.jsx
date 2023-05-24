import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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

const Tab = createBottomTabNavigator();
const MyPlantStackNavigation = createStackNavigator();

const app = initializeApp(firebaseConfig);

const MyPlant = () => {
  const [ledStatus, setLedStatus] = useState(null);
  const [humidityStatus, setHumidityStatus] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [isCheckMotorMovement, setCheckMotorMovement] = useState(null);

  useEffect(() => {
    const db = getDatabase(app);
    const humidityStatusRef = ref(
      db,
      "Sensors/HumiditySensors/HumiditySensorsOne"
    );
    onValue(humidityStatusRef, (snapshot) => {
      const data = snapshot.val();
      setHumidityStatus(data);
    })
  }, []);

  const handleToggle = () => {
    const db = getDatabase(app);
    const CheckMotorMovement = ref(db, "MotorMovement/CheckMotorMovement");
    set(CheckMotorMovement, false);
    setCheckMotorMovement(!isCheckMotorMovement);
    if (!isCheckMotorMovement) {
      set(CheckMotorMovement, true);
    }
  };

  const handleTurnOnLed = () => {
    const db = getDatabase(app);
    const ledStatusRef = ref(db, "ledStatus");
    set(ledStatusRef, 1);
    setLedStatus("on");
  };

  const handleTurnOffLed = () => {
    const db = getDatabase(app);
    const ledStatusRef = ref(db, "ledStatus");
    set(ledStatusRef, 0);
    setLedStatus("off");
  };

  const handleComponent = () => {
    setShowComponent(!showComponent);
  };

  const MotorMovementUpIn = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Up");
    set(MotorMovementRef, 1);
  };

  const MotorMovementUpOut = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Up");
    set(MotorMovementRef, 0);
  };

  const MotorMovementRightIn = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Right");
    set(MotorMovementRef, 1);
  };

  const MotorMovementRightOut = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Right");
    set(MotorMovementRef, 0);
  };

  const MotorMovementLeftIn = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Left");
    set(MotorMovementRef, 1);
  };

  const MotorMovementLeftOut = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Left");
    set(MotorMovementRef, 0);
  };

  const MotorMovementDownIn = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Down");
    set(MotorMovementRef, 1);
  };

  const MotorMovementDownOut = () => {
    const db = getDatabase(app);
    const MotorMovementRef = ref(db, "MotorMovement/MotorMovement/Down");
    set(MotorMovementRef, 0);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Status</Text>
          <Text>Estad del led: {ledStatus}</Text>
          <View style={styles.containerButtons}>
            <Button onPress={handleTurnOnLed} title="Encender LED" />
            <Button onPress={handleTurnOffLed} title="Apagar LED" />
          </View>
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
        <View style={styles.section}>
          <TouchableOpacity onPress={handleComponent}>
            <Text style={styles.textSection}>Planta de Aguacate</Text>
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
        <View style={styles.section}>
          <TouchableOpacity onPress={handleComponent}>
            <Text style={styles.textSection}>Planta de Aguacate</Text>
            <Image
              style={styles.imgStack}
              source={require("../../assets/img/imagen-2.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            padding: 30,
            flexDirection: "colum",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: 600,
                fontSize: 22,
                marginRight: 10,
              }}
            >
              Movement Controller
            </Text>
            <View>
              <TouchableOpacity
                style={{
                  position: "relative",
                  width: 80,
                  height: 40,
                  backgroundColor: isCheckMotorMovement ? "#05c46b" : "#ddd",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: isCheckMotorMovement ? "flex-end" : "flex-start",
                  padding: 5,
                  margin: 10,
                }}
                onPress={handleToggle}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: "#fff",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                  }}
                ></View>
                <Text
                  style={{
                    position: "absolute",
                    top: -25,
                    right: -35,
                    fontSize: 12,
                    fontWeight: "bold",
                    color: isCheckMotorMovement ? "#05c46b" : "#aaa",
                    textShadowColor: "#fff",
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 1,
                  }}
                ></Text>
              </TouchableOpacity>
            </View>
          </View>
          {isCheckMotorMovement && (
            <View
              style={{
                margin: 25,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                onPressIn={MotorMovementUpIn}
                onPressOut={MotorMovementUpOut}
              >
                <AntDesign name="caretup" size={70} color="black" />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPressIn={MotorMovementLeftIn}
                  onPressOut={MotorMovementLeftOut}
                >
                  <AntDesign name="caretleft" size={70} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPressIn={MotorMovementRightIn}
                  onPressOut={MotorMovementRightOut}
                  style={{ marginLeft: 30 }}
                >
                  <AntDesign name="caretright" size={70} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPressIn={MotorMovementDownIn}
                onPressOut={MotorMovementDownOut}
              >
                <AntDesign name="caretdown" size={70} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </View>
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
              <Text style={{ fontSize: 20 }}>Humedad: {humidityStatus}</Text>
              <Text style={{ fontSize: 20 }}>Temperatura: 20</Text>
              <Text style={{ fontSize: 20 }}>Luz: 20</Text>
            </View>
          </SlideUpView>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
    width: "100%",
  },
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

/* Sombra por si acaso
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 2,
*/

export default MyPlant;

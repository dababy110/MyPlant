import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebase-config';
import { getDatabase, onValue, ref, set } from "firebase/database";

import { FontAwesome } from '@expo/vector-icons';

const app = initializeApp(firebaseConfig);

const MovementController = () => {
    const [isCheckMotorMovement, setCheckMotorMovement] = useState(null);

    const handleToggle = () => {
        const db = getDatabase(app);
        const CheckMotorMovement = ref(db, "MotorMovement/CheckMotorMovement");
        set(CheckMotorMovement, false);
        setCheckMotorMovement(!isCheckMotorMovement);
        if (!isCheckMotorMovement) {
            set(CheckMotorMovement, true);
        }
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
        <View
            style={{
                marginTop: 50,
            }}
        >
            <View
                style={{
                    width: 360, 
                    height: 110,
                    marginBottom: 20,
                    alignItems: 'center',
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 30,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 600,
                            fontSize: 22,
                            marginRight: 2,
                            color: "#435B71",
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
                                    color: isCheckMotorMovement ? "#0D986A" : "#aaa",
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
                            margin: 5,
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            flexDirection: 'row',
                            gap: 40,
                        }}
                    >
                        <View style={{ flexDirection: "row", gap: 20, }}>
                            <TouchableOpacity
                                onPressIn={MotorMovementUpIn}
                                onPressOut={MotorMovementUpOut}
                            >
                                <FontAwesome name="arrow-circle-up" size={70} color="#435B71" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPressIn={MotorMovementDownIn}
                                onPressOut={MotorMovementDownOut}
                            >
                                <FontAwesome name="arrow-circle-down" size={70} color="#435B71" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", gap: 20, }}>
                            <TouchableOpacity
                                onPressIn={MotorMovementLeftIn}
                                onPressOut={MotorMovementLeftOut}
                            >
                                <FontAwesome name="arrow-circle-left" size={70} color="#435B71" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPressIn={MotorMovementRightIn}
                                onPressOut={MotorMovementRightOut}
                            >
                                <FontAwesome name="arrow-circle-right" size={70} color="#435B71" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}

export default MovementController;
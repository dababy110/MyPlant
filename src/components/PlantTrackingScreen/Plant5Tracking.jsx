import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import { getDatabase, onValue, ref } from 'firebase/database';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Modal from 'react-native-modal';

const app = initializeApp(firebaseConfig);

const PlantTracking = () => {
    const [newName, setNewName] = useState('');
    const [name, setName] = useState('Nombre De La Planta');

    const [TempStatus, setTempStatus] = useState('');
    const [LightStatus, setLightStatus] = useState('');
    const [HumidityStatus, setHumidityStatus] = useState('');

    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

    useEffect(() => {
        const db = getDatabase(app);

        const humidityStatusRef = ref(db, 'Sensors/HumiditySensors/HumiditySensorFive');
        const LightStatus = ref(db, 'Sensors/LightSensors/LightSensorOne');
        const TempStatus = ref(db, 'Sensors/TempSensors/TempSensorOne');

        onValue(humidityStatusRef, snapshot => {
            const data = snapshot.val();
            setHumidityStatus(data);
        });
        onValue(LightStatus, snapshot => {
            const data = snapshot.val();
            setLightStatus(data);
        });
        onValue(TempStatus, snapshot => {
            const data = snapshot.val();
            setTempStatus(data);
        });
    }, []);

    const openBottomSheet = () => {
        setIsBottomSheetVisible(true);
    };

    const closeBottomSheet = () => {
        setIsBottomSheetVisible(false);
    };

    const handleChangeName = (text) => {
        setNewName(text);
    };

    const handleSave = () => {
        if (newName !== '') {
            setName(newName);
        }
        setNewName('Nombre de la Planta');
        setIsBottomSheetVisible(false);
    };

    return (
        <View>
            <View
                style={{
                    width: 500,
                    height: 400,
                    backgroundColor: '#DEEAD8',
                    padding: 15,
                    borderBottomLeftRadius: 70,
                }}
            >
                <View style={{ marginTop: Constants.statusBarHeight, padding: 20 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginRight: 90,
                        }}
                    >
                        <Text style={{ fontWeight: '500', color: '#002140' }}>Plant Status</Text>
                        <TouchableOpacity onPress={openBottomSheet}>
                            <Feather name="edit" size={24} color="#002140" />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 50, color: '#002140', fontWeight: '500', width: 260 }}>
                        {name}
                    </Text>
                    <View style={{ position: 'absolute', top: 62, left: 165 }}>
                        <Image
                            source={require('../../../assets/img/Plant1.png')}
                            style={{ width: 230, height: 275 }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 35 }}>
                    <Text style={{ color: '#002140', fontSize: 25, fontWeight: '600' }}>Status</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 20,
                            alignItems: 'space-around',
                            justifyContent: 'space-around',
                        }}
                    >
                        <View style={{
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            < Entypo name="light-down" size={35} color="#435B71" />
                            <Text style={{ color: "#435B71", fontSize: 10, fontWeight: "bold", marginTop: 5, }}>LIGHT</Text>
                            <Text style={{ color: '#0D986A', fontWeight: '600', fontSize: 20, marginTop: 5, }}>{LightStatus}</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="oil-temperature" size={30} color="#435B71" />
                            <Text style={{ color: "#435B71", fontSize: 10, fontWeight: "bold", marginTop: 5, }}>TEMP</Text>
                            <Text style={{ color: '#0D986A', fontWeight: '600', fontSize: 20, marginTop: 5, }}>{TempStatus}</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="water" size={24} color="#435B71" />
                            <Text style={{ color: "#435B71", fontSize: 10, fontWeight: "bold", marginTop: 5, }}>HUMIDITY</Text>
                            <Text style={{ color: '#0D986A', fontWeight: '600', fontSize: 20, marginTop: 5, }}>{HumidityStatus}</Text>
                        </View>
                    </View>
                </View>
                <Modal isVisible={isBottomSheetVisible} onBackdropPress={closeBottomSheet}>
                    <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: "20px", alignItems: 'flex-start', justifyContent: 'flex-start', gap: 20, width: '100%', }}>
                        <Text style={{ fontSize: 30, fontWeight: '500', color: '#435B71', }}>Cambiar Nombre</Text>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            maxLength={20}
                            onChangeText={handleChangeName}
                            style={{
                                margin: 5,
                                width: 300,
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 5,
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderColor: "#435B71",
                            }}
                            placeholder="Ingresa El Nombre"
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', gap: 15, width: '100%', }}>
                            <TouchableOpacity onPress={closeBottomSheet}>
                                <Text style={{color: '#0D986A', fontWeight: 600, fontSize: 15,}}>Cerrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSave}>
                                <Text style={{color: '#0D986A', fontWeight: 600, fontSize: 15,}}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View >
        </View >
    )
}

export default PlantTracking;

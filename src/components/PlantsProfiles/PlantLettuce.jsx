import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import MovementController from '../../components/MovementController';

const PlantTomato = () => {
    const navigation = useNavigation();
    const [showComponent, setShowComponent] = useState(true);

    return (
        <View style={{ marginTop: Constants.statusBarHeight, padding: 20, height: "100%" }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../../../assets/img/Logo.png')}
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                    <Text style={{ color: "#0D986A", fontSize: 30, fontWeight: "bold", }}>MyPlant</Text>
                </View>
                <Ionicons name="notifications-outline" size={27} color="#435B71" />
            </View>

            <View style={{ marginTop: 40 }}>
                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', gap: 30, }}>
                    <TouchableOpacity onPress={() => setShowComponent(true)} style={{ width: 60, height: 66, alignItems: 'center', gap: 2, }}>
                        {showComponent ? <Image
                            source={require(`../../../assets/img/PlantHomeScreen-fill.png`)}
                            style={{ width: 25, height: 40 }}
                        /> : <Image
                            source={require(`../../../assets/img/PlantHomeScreen.png`)}
                            style={{ width: 25, height: 40 }}
                        />}
                        <Text style={{ fontSize: 15, color: !showComponent ? '#435B71' : '#0D986A', fontWeight: '600', }}>Plants</Text>
                        {showComponent && <Image
                            source={require(`../../../assets/img/Rectangle.png`)}
                            style={{ width: 45, height: 3, }}
                        />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowComponent(false)} style={{ width: 60, height: 50, alignItems: 'center', gap: 2, }}>
                        <Ionicons name="game-controller-outline" size={30} color={showComponent ? '#435B71' : '#0D986A'} />
                        <Text style={{ fontSize: 15, color: showComponent ? '#435B71' : '#0D986A', fontWeight: '600', }}>Controll</Text>
                        {!showComponent && <Image
                            source={require(`../../../assets/img/Rectangle.png`)}
                            style={{ width: 58, height: 3, }}
                        />}
                    </TouchableOpacity>
                </View>

                {showComponent ? <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50, gap: 60, width: "100%", paddingBottom: 100 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#DCE8D6', width: 360, height: 110, borderRadius: "20px", }}>
                        <View style={{ justifyContent: 'flex-end', }}>
                            <Image
                                source={require('../../../assets/img/Plant1.png')}
                                style={{ width: 130, height: 150 }}
                            />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#002140', fontWeight: '600', fontSize: 20, }}>Planta 1</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("Plant1Tracking") }} style={{
                            alignItems: 'center', justifyContent: 'center', width: 85, height: 110, borderRadius: "0", borderBottomLeftRadius: 181.639, borderTopLeftRadius: 181.639, borderBottomRightRadius: 32.8264,
                            borderTopRightRadius: 32.8264, backgroundColor: '#C3DCB7',
                        }}>
                            <AntDesign name="right" size={35} color="#fff" style={{ marginLeft: 10, }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#D6E4E8', width: 360, height: 110, borderRadius: "20px", }}>
                        <View style={{ justifyContent: 'flex-end', }}>
                            <Image
                                source={require('../../../assets/img/Plant1.png')}
                                style={{ width: 130, height: 150 }}
                            />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#002140', fontWeight: '600', fontSize: 20, }}>Planta 2</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("Plant2Tracking") }} style={{
                            alignItems: 'center', justifyContent: 'center', width: 85, height: 110, borderRadius: "0", borderBottomLeftRadius: 181.639, borderTopLeftRadius: 181.639, borderBottomRightRadius: 32.8264,
                            borderTopRightRadius: 32.8264, backgroundColor: '#C3D4D9',
                        }}>
                            <AntDesign name="right" size={35} color="#fff" style={{ marginLeft: 10, }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#DCE8D6', width: 360, height: 110, borderRadius: "20px", }}>
                        <View style={{ justifyContent: 'flex-end', }}>
                            <Image
                                source={require('../../../assets/img/Plant1.png')}
                                style={{ width: 130, height: 150 }}
                            />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#002140', fontWeight: '600', fontSize: 20, }}>Planta 3</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("Plant3Tracking") }} style={{
                            alignItems: 'center', justifyContent: 'center', width: 85, height: 110, borderRadius: "0", borderBottomLeftRadius: 181.639, borderTopLeftRadius: 181.639, borderBottomRightRadius: 32.8264,
                            borderTopRightRadius: 32.8264, backgroundColor: '#C3DCB7',
                        }}>
                            <AntDesign name="right" size={35} color="#fff" style={{ marginLeft: 10, }} />
                        </TouchableOpacity>
                    </View>
                </View> : <MovementController />}
            </View>
        </View>
    )
}

export default PlantTomato
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

import PlantLettuce from './PlantLettuce';
import PlantTomato from './PlantTomato.jsx';
import PlantBeans from './PlantBeans';
import PlantChili from './PlantChili';
import { ScrollView } from 'react-native-gesture-handler';

const PlantProfilesChoose = () => {

    const [profileSelect, setProfileSelect] = useState(null);

    let profileComponet;

    if (profileSelect === 'plantTomato') {
        profileComponet = <PlantTomato />;

    } else if (profileSelect === 'plantLettuce') {
        profileComponet = <PlantLettuce />;

    } else if (profileSelect === 'plantBeans') {
        profileComponet = <PlantBeans />;

    } else if (profileSelect === 'plantChili') {
        profileComponet = <PlantChili />;
    }

    const handleProfileSelect = (profile) => {
        setProfileSelect(profile);
    }


    return (
        <View style={{height: '100%', paddingBottom: 170,}}>
            {!profileSelect && <View style={{ marginTop: 100,}}>
                <Text style={{ padding: 20, width: "100%", fontSize: 30, fontWeight: 600, color: "#0D986A", }}>Elige el tipo de planta:</Text>
                <View style={{
                    gap: 20,
                    padding: 10,
                    width: "100%",
                    flexWrap: "wrap",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <TouchableOpacity onPress={() => handleProfileSelect('plantTomato')} style={style.profile}>
                        <Text style={style.profileText}>Planta de Tómate</Text>
                        <Image source={require('../../../assets/img/Plant1.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleProfileSelect('plantLettuce')} style={style.profile}>
                        <Text style={style.profileText}>Planta de Lechuga</Text>
                        <Image source={require('../../../assets/img/Plant2.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleProfileSelect('plantBeans')} style={style.profile}>
                        <Text style={style.profileText}>Planta de Frijoles</Text>
                        <Image source={require('../../../assets/img/Plant3.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleProfileSelect('plantChili')} style={style.profile}>
                        <Text style={style.profileText}>Planta de Chile Dulce</Text>
                        <Image source={require('../../../assets/img/Plant4.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>}
            { profileSelect &&
                <>
                    {profileComponet}
                    <TouchableOpacity onPress={() => {handleProfileSelect(null)}} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#0D986A", borderRadius: 9, padding: 20, marginRight: 30, marginLeft: 30, marginTop: -60,}}>
                        <Text style={{ color: "#fff", fontWeight: "bold", }}>
                            Cambiar Tipo de Planta
                        </Text>
                    </TouchableOpacity>
                </>
            }
        </View >
    )
}

const style = StyleSheet.create({
    profile: {
        alignItems: "flex-start",
        justifyContent: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        flexDirection: "colum",
        borderRadius: "10px",
        alignItems: "center",
        width: "45%",
        height: 250,
        padding: 25,
    },
    profileText: {
        textAlign: "center",
        color: "#435B71",
        fontWeight: 500,
        fontSize: 22,
    }
})


export default PlantProfilesChoose
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

import PlantsControll from './PlantsControll';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import { getDatabase, ref, set } from 'firebase/database';

const app = initializeApp(firebaseConfig);

const PlantProfilesChoose = () => {

    const db = getDatabase(app);

    const [profileSelect, setProfileSelect] = useState(null);

    const TomatoPlantRef = ref(db, "Settings/TomatoPlant");
    const LettucePlantRef = ref(db, "Settings/LettucePlant");
    const ChilliPlantRef = ref(db, "Settings/ChilliPlant");
    const BeanPlantRef = ref(db, "Settings/ChilliPlant");

    let profileComponet;

    if (profileSelect === 'plantTomato') {
        profileComponet = <PlantsControll img={require('../../../assets/img/PlantTomatoes.png')}/>;
        set(LettucePlantRef, false);
        set(ChilliPlantRef, false);
        set(TomatoPlantRef, true);
        set(BeanPlantRef, false);

    } else if (profileSelect === 'plantLettuce') {
        profileComponet = <PlantsControll img={require('../../../assets/img/PlantLettuce.png')}/>;
        set(LettucePlantRef, true);
        set(ChilliPlantRef, false);
        set(TomatoPlantRef, false);
        set(BeanPlantRef, false);

    } else if (profileSelect === 'plantBeans') {
        profileComponet = <PlantsControll img={require('../../../assets/img/PlantBeans.png')}/>;
        set(LettucePlantRef, false);
        set(ChilliPlantRef, false);
        set(TomatoPlantRef, false);
        set(BeanPlantRef, true);

    } else if (profileSelect === 'plantChili') {
        profileComponet = <PlantsControll img={require('../../../assets/img/PlantChilli.png')}/>;
        set(LettucePlantRef, false);
        set(TomatoPlantRef, false);
        set(ChilliPlantRef, true);
        set(BeanPlantRef, false);
    }

    const handleProfileSelect = (profile) => {
        setProfileSelect(profile);
        set(LettucePlantRef, false);
        set(ChilliPlantRef, false);
        set(TomatoPlantRef, false);
        set(BeanPlantRef, false);
    }


    return (
        <View style={{ height: '100%', paddingBottom: 150,}}>
            {!profileSelect && <View style={{ marginTop: 50, height: '100%', alignItems: 'center', justifyContent: 'center',}}>
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
                        <Image source={require('../../../assets/img/PlantTomatoes.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleProfileSelect('plantLettuce')} style={style.profile}>
                        <Text style={style.profileText}>Planta de Lechuga</Text>
                        <Image source={require('../../../assets/img/PlantLettuce.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleProfileSelect('plantBeans')} style={style.profile}>
                        <Text style={style.profileText}>Planta de Frijoles</Text>
                        <Image source={require('../../../assets/img/PlantBeans.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleProfileSelect('plantChili')} style={style.profile}>
                        <Text style={style.profileText}>Planta de Chile Dulce</Text>
                        <Image source={require('../../../assets/img/PlantChilli.png')}
                            style={{
                                width: 120,
                                height: 140,
                                marginTop: 10,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>}
            {profileSelect &&
                <View style={{ alignItems: "center", height: "100%",}}>
                    {profileComponet}
                    <TouchableOpacity onPress={() => { handleProfileSelect(null) }} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#0D986A", borderRadius: 9, padding: 20, width: 360, marginTop: -60, }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", }}>
                            Cambiar Tipo de Planta
                        </Text>
                    </TouchableOpacity>
                </View>
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
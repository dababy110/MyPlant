import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { firebase } from '../../firebase-config';

const width = Dimensions.get('window').width;

const ProfileScreen = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    // Handle changes of user state
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

        return subscriber; // Clean the user
    }, []);

    if (initializing) return null;

    return (
        <ImageBackground source={require('../../assets/img/ProfileScreenBg.png')} resizeMode="cover" style={{ width: width, height: '100%' }}>
            <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 150, gap: 20, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, }}>
                    <Image
                        source={require('../../assets/img/Logo.png')}
                        style={{
                            width: 40,
                            height: 60,
                        }}
                    />
                    <Text style={{ color: "#0D986A", fontSize: 50, fontWeight: "600", }}>Profile</Text>
                </View>
                <Text style={{ textAlign: "center", marginLeft: 50, marginRight: 50, }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, width: "100%" }}>

                    <TouchableOpacity onPress={() => { navigation.navigate("Login") }} style={{ width: 100, height: 50, backgroundColor: "#F8F8F8", justifyContent: 'center', borderRadius: 5 }}>
                        <Text style={{ textAlign: "center" }}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }} style={{ width: 100, height: 50, backgroundColor: "#0D986A", justifyContent: 'center', borderRadius: 5, }}>
                        <Text style={{ textAlign: "center", color: "#fff", }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default ProfileScreen;
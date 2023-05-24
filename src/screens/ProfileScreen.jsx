import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import Login from '../components/Login';
import Signup from '../components/SignUp';
import Dashboard from '../components/Dashboard';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { firebase } from '../../firebase-config';

const Stack = createStackNavigator();

const ProfileScreen = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    // Manejar cambios en el estado del usuario
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

        return subscriber; // Limpia el suscriptor cuando el componente se desmonte
    }, []);

    if (initializing) return null;

    return (
        <Stack.Navigator>
            {!user ? (
                <Stack.Screen name='Dashboard' 
                options={{
                    headerShown: false,
                }} 
                component={Dashboard} />
            ) : (
                <>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='SignUp' component={Signup} />
                </>
            )}
        </Stack.Navigator>
    );
};

export default ProfileScreen;
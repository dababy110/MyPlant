import React from 'react';
import { StyleSheet, View, } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";

import Login from '../components/Login';
import Signup from '../components/SignUp';
import Dashboard from '../components/Dashboard';

import Plant1Tracking from './PlantTrackingScreen/Plant1Tracking';
import Plant2Tracking from './PlantTrackingScreen/Plant2Tracking';
import Plant3Tracking from './PlantTrackingScreen/Plant3Tracking';
import Plant4Tracking from './PlantTrackingScreen/Plant4Tracking';
import Plant5Tracking from './PlantTrackingScreen/Plant5Tracking';

import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeStackNavigation = createStackNavigator();
const ProfileStackNavigation = createStackNavigator();

const HomeStack = () => {
    return (
        <HomeStackNavigation.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigation.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigation.Screen
                name="Plant1Tracking"
                component={Plant1Tracking}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigation.Screen
                name="Plant2Tracking"
                component={Plant2Tracking}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigation.Screen
                name="Plant3Tracking"
                component={Plant3Tracking}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigation.Screen
                name="Plant4Tracking"
                component={Plant4Tracking}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigation.Screen
                name="Plant5Tracking"
                component={Plant5Tracking}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStackNavigation.Navigator>
    );
};

// const ProfileStack = () => {
//     <ProfileStackNavigation.Navigator initialRouteName="Dashboard">
//         <ProfileStackNavigation.Screen
//             name='Dashboard'
//             component={Dashboard}
//             options={{ headerShown: false, }}
//         />
//         <ProfileStackNavigation.Screen
//             name='Login'
//             component={Login}
//             options={{ headerShown: false, }}
//         />
//         <ProfileStackNavigation.Screen
//             name='SignUp'
//             component={Signup}
//             options={{ headerShown: false, }}
//         />
//     </ProfileStackNavigation.Navigator>
// }

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#6a6ce0",
                showLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 30,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 80,
                    ...styles.shadow,
                },
            }}
        >
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 20, }}>
                            {focused ? <Ionicons name="ios-settings" size={35} color="#435B71" /> : <Ionicons name="ios-settings-outline" size={35} color="#435B71" />}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 20, }}>
                                {focused ? <Ionicons name="home" size={35} color="#435B71" /> : <Ionicons name="ios-home-outline" size={35} color="#435B71" />}
                            </View>
                        )
                    },
                    toBarBadge: 18,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 20, }}>
                                {focused ? <Octicons name="person-fill" size={35} color="#435B71" /> : <Octicons name="person" size={35} color="#435B71" />}
                            </View>
                        )
                    },
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

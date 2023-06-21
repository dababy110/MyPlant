import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

import Login from "../components/Profile/Login";
import SignUp from "../components/Profile/SignUp";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileLoggedScreen from '../screens/ProfileLoggedScreen';

import Plant1Tracking from "./PlantTrackingScreen/Plant1Tracking";
import Plant2Tracking from "./PlantTrackingScreen/Plant2Tracking";
import Plant3Tracking from "./PlantTrackingScreen/Plant3Tracking";

import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { firebase } from "../../firebase-config";

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
    </HomeStackNavigation.Navigator>
  );
};

const ProfileStack = () => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
    a;
  }, []);

  if (initializing) return null;

  return (
    <ProfileStackNavigation.Navigator initialRouteName="ProfileScreen">
      {!user ? (
        <>
          <ProfileStackNavigation.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <ProfileStackNavigation.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <ProfileStackNavigation.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <ProfileStackNavigation.Screen
            name="ProfileScreen"
            component={ProfileLoggedScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </ProfileStackNavigation.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#6a6ce0",
        showLabel: false,
        tabBarStyle: {
          flex: 1,
          position: "absolute",
          left: 20,
          right: 20,
          margin: 0,
          bottom: 30,
          elevation: 0,
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
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                marginTop: 40,
              }}
            >
              {focused ? (
                <Ionicons name="ios-settings" size={35} color="#435B71" />
              ) : (
                <Ionicons
                  name="ios-settings-outline"
                  size={35}
                  color="#435B71"
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  marginTop: 40,
                }}
              >
                {focused ? (
                  <Ionicons name="home" size={35} color="#435B71" />
                ) : (
                  <Ionicons name="ios-home-outline" size={35} color="#435B71" />
                )}
              </View>
            );
          },
          toBarBadge: 18,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  marginTop: 40,
                }}
              >
                {focused ? (
                  <Octicons name="person-fill" size={35} color="#435B71" />
                ) : (
                  <Octicons name="person" size={35} color="#435B71" />
                )}
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

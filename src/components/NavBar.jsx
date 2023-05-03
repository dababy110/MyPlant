import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MyPlant from "../components/MyPlant";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const HomeStackNavigation = createStackNavigator();

const MyStack = () => {
  return (
    <HomeStackNavigation.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigation.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigation.Screen name="MyPlant" component={MyPlant} />
    </HomeStackNavigation.Navigator>
  );
};

const NavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#6a6ce0",
        }}
      >
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="settings" size={30} color={color} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            toBarLabel: "Feed",
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={30} color={color} />;
            },
            toBarBadge: 18,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="user-circle" size={30} color={color} />;
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;

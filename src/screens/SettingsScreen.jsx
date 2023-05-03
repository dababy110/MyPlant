import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const SettingsScreen = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>SettingsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        margin: Constants.statusBarHeight,
    },
    Text: {
        fontSize: 50,
        fontWeight: "600",
        color: "#006414",
    },
})

export default SettingsScreen;
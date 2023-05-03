import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../../assets/img/imagen.png')} />
            </View>
            <View style={styles.content}>
                {/* <AntDesign name="caretright" size={10} color="black" style={{ marginRight: 10 }} /> */}
                <AntDesign name="caretdown" size={10} color="black" style={{ marginRight: 10 }} />
                <Text style={styles.text}>
                    My device
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("MyPlant") }}
                    style={{
                        backgroundColor: "#fff",
                        padding: 10,
                        marginTop: 10,
                        width: "100%",
                        height: 100,
                        borderRadius: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 70,
                    }}
                >
                    <Image style={styles.imgStack} source={require('../../assets/img/imagen.png')} />
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#000",
                        }}
                    >
                        MyStack
                    </Text>
                    <AntDesign name="right" size={35} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: Constants.statusBarHeight,
    },
    imgContainer: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
    },
    imgStack: {
        width: 60,
        height: 60,
    },
    content: {
        flexDirection: 'row',
        alignItems: "center",
        gap: .5,
        opacity: 0.5,
    },
    text: {
        fontSize: 15,
        color: "#000",
    }
})

export default HomeScreen;
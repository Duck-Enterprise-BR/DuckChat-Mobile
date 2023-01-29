import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const InitialStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.white,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },

    next: {
        flex: 1,
        flexDirection: 'column-reverse',
        marginBottom: '10%',
        width: '90%',
        backgroundColor: Colors.white
    },

    screenName: {
        color: Colors.orange2,
        fontWeight: 'bold',
        fontSize: RFValue(40)
    },

    login: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        width: '100%',
        height: '50%',
        //arginTop: '20%',
        justifyContent: 'center',
    }
})

export default InitialStyle;
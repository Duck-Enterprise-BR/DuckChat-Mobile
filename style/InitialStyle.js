import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";

const InitialStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.background,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },

    next: {
        flex: 1,
        flexDirection: 'column-reverse',
        marginBottom: 100,
        width: '90%',
        //alignItems: 'center',
        //alignContent: 'center',
        backgroundColor: Colors.background
    }
})

export default InitialStyle;
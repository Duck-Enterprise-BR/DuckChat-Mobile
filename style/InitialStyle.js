import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";

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
        marginBottom: 100,
        //alignItems: 'center',
        //alignContent: 'center',
        backgroundColor: Colors.white
    }
})

export default InitialStyle;
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";

const TextButtonStyle = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },

    ButtonContainer: {
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },

    ButtonText: {
        fontSize: 10,
        color: Colors.violet2,
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    }
});

export default TextButtonStyle;
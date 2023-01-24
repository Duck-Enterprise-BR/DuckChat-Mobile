import React from "react";
import Colors from "../Colors/Colors";
import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create ({
    header: {
        height: '12%',
        width: '100%',
        backgroundColor: Colors.violet,
        alignContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative'
    },

    title: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: "bold",
        //alignSelf: 'baseline',
        textTransform: "uppercase",
        padding: 15,
        paddingTop: 50
    }
})

export default HeaderStyle;
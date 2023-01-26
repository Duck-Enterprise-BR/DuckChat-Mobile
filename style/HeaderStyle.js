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
    },

    title: {
        fontSize: 20,
        color: Colors.violet3,
        fontWeight: "bold",
        //textTransform: 'capitalize',
        padding: 15,
        paddingTop: 50
    }
})

export default HeaderStyle;
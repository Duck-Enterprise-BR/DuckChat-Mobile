import React from "react";
import Colors from "../colors/Colors";
import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create ({
    header: {
        backgroundColor: Colors.violet,
        flex: 0,
        height: 100,
        width: 400,
        alignContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
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
import React from "react";
import Colors from "../colors/Colors";
import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const HeaderStyle = StyleSheet.create ({
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: Colors.gray3,
        alignContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute'
    },

    title: {
        fontSize: RFValue(22),
        color: Colors.orange2,
        fontWeight: "bold",
        padding: 15,
        paddingTop: RFValue(50),
        position: 'absolute'
    }
})

export default HeaderStyle;
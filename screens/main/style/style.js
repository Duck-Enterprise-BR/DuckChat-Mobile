import React from "react"
import { StyleSheet } from "react-native"
import Colors from "../../../colors";
import { RFValue } from "react-native-responsive-fontsize";

const HeaderHeight = "9%";
const HeaderTitleSize = RFValue(20);
const tabBarLabelSize = RFValue(12);

const MainStyle = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: Colors.white,
    },

    item: {
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
    },

    header: {
        backgroundColor: Colors.white,
        height: HeaderHeight,
        justifyContent: 'flex-end',
    },

    headerTitle: {
        fontSize: HeaderTitleSize
    },

    tabBarLabel: {
        fontSize: tabBarLabelSize
    },

    tabBarIndicator: {
        backgroundColor: Colors.orange
    }
})

export default MainStyle;
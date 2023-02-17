import React from "react"
import { StyleSheet } from "react-native"
import Colors from "../../colors/Colors";

const MainStyle = StyleSheet.create({
    base: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },

    navigator: {
        
    },

    item: {
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
    },

    header: {
        backgroundColor: Colors.gray3
    },

    tabBar: {
        height: '6%'
    },

    icon: {
        
    }
})

export default MainStyle;
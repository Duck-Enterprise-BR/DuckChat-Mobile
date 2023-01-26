import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OptionButtonStyle from "../style/OptionButtonStyle";
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from "../Colors/Colors";

const OptionButton = ({onPress, iconName }) => {
    return (
        <View style={OptionButtonStyle.base}>
            <TouchableOpacity onPress={onPress}>
                <View style={OptionButtonStyle.button}>
                <Ionicons style={OptionButtonStyle.icon}
                name={iconName} size={30}
                />
                </View>
                <View style={OptionButtonStyle.borderEnd}>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default OptionButton;
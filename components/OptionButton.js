import React from "react";
import { View, TouchableOpacity } from "react-native";
import OptionButtonStyle from "../styles/components/OptionButtonStyle";
import Ionicons from '@expo/vector-icons/Ionicons'

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
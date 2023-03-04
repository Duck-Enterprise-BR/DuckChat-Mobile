import React from "react";
import { View, TouchableOpacity } from "react-native";
import Style from "./style/style";
import Ionicons from '@expo/vector-icons/Ionicons'

const OptionButton = ({onPress, iconName }) => {
    return (
        <View style={Style.base}>
            <TouchableOpacity onPress={onPress}>
                <View style={Style.button}>
                <Ionicons style={Style.icon}
                name={iconName} size={30}
                />
                </View>
                <View style={Style.borderEnd}>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default OptionButton;
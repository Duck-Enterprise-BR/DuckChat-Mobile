import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OptionButtonStyle from "../style/OptionButtonStyle";
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from "../Colors/Colors";
import { Entypo, EvilIcons } from '@expo/vector-icons';

const OptionButton = ({onPress, iconName}) => {
    return (
        <View style={OptionButtonStyle.base}>
            <TouchableOpacity onPress={onPress}>
                <View style={OptionButtonStyle.button}>
                <Entypo 
                style={OptionButtonStyle.icon}
                name={iconName} size={35}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default OptionButton;
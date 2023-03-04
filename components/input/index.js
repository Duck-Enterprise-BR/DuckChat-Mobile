import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Style from "./style/style";
import Colors from "../../colors";

const Input = ({ placeHolder, validInput, errorText, title, onChangeText, text, showSecureText, isHideText, onChangeHideText }) => {
    var error;
    
    if (!validInput) {
        error = errorText;
    }

    return (
        <View style={Style.base}>
            <Text style={Style.title}>{title}</Text>
            <TouchableOpacity
                style={Style.showPassword}
                onPress={onChangeHideText}
            >
                <Text style={Style.showPasswordText}>{showSecureText}</Text>
            </TouchableOpacity>
            <TextInput
                style={Style.input}
                placeholder={placeHolder}
                placeholderTextColor={Colors.gray5}
                onChangeText={onChangeText}
                value={text}
                secureTextEntry={isHideText}
            />

            <Text style={Style.error}>{error}</Text>
        </View>
    )
}

export default Input;
import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import InputStyle from "../style/InputStyle";
import Colors from "../Colors/Colors";

const Input = ({ placeHolder, validInput, errorText, title, onChangeText, text, showSecureText, isHidePassword, onChangeHideText }) => {
    var error;
    
    if (!validInput) {
        error = errorText;
    }

    return (
        <View style={InputStyle.base}>
            <Text style={InputStyle.title}>{title}</Text>
            <TouchableOpacity
                style={InputStyle.showPassword}
                onPress={onChangeHideText}
            >
                <Text style={InputStyle.showPasswordText}>{showSecureText}</Text>
            </TouchableOpacity>
            <TextInput
                style={InputStyle.input}
                placeholder={placeHolder}
                placeholderTextColor={Colors.violet4}
                onChangeText={onChangeText}
                value={text}
                secureTextEntry={isHidePassword}
            />

            <Text style={InputStyle.error}>{error}</Text>
        </View>
    )
}

export default Input;
import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import InputStyle from "../styles/components/InputStyle";
import Colors from "../colors/Colors";

const Input = ({ placeHolder, validInput, errorText, title, onChangeText, text, showSecureText, isHideText, onChangeHideText }) => {
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
                placeholderTextColor={Colors.gray5}
                onChangeText={onChangeText}
                value={text}
                secureTextEntry={isHideText}
            />

            <Text style={InputStyle.error}>{error}</Text>
        </View>
    )
}

export default Input;
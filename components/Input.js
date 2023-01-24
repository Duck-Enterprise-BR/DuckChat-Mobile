import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import InputStyle from "../style/InputStyle";

const Input = ({ placeHolder, validInput, errorText, title, onChangeText, text, showSecureText }) => {
    var error;
    const [isHidePassword, onChangeHidePassword] = React.useState(true);
    
    if (!validInput) {
        error = errorText;
    }

    return (
        <View style={InputStyle.base}>
            <Text style={InputStyle.title}>{title}</Text>
            <TouchableOpacity
                style={InputStyle.showPassword}
                //onPress={onChangeHidePassword}
            >
                <Text style={InputStyle.showPasswordText}>{showSecureText}</Text>
            </TouchableOpacity>
            <TextInput
                style={InputStyle.input}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                value={text}
                //secureTextEntry={isHidePassword}
            />

            <Text style={InputStyle.error}>{error}</Text>
        </View>
    )
}

export default Input;
import React from "react";
import { View, TextInput, Text } from "react-native";
import InputStyle from "../style/InputStyle";

const Input = ({placeHolder, validInput, errorText, title, onChangeText, text}) =>{
    var error;

    if(!validInput){
        error = errorText;
    }

    return(
        
        <View>
            <Text style={InputStyle.title}>{title}</Text>
            <TextInput
                style={InputStyle.input}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                value={text}
            />
            <Text style={InputStyle.error}>{error}</Text>
        </View>
    )
}

export default Input;
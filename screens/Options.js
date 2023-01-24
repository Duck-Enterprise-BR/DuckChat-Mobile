import React from "react";
import { View, Text } from "react-native";
import OptionsStyle from "../style/OptionsStyle";
import OptionButton from "../components/OptionButton";

const Options = () =>{
    function Teste(){
        console.log("Duck")
    }

    return(
        <View style={OptionsStyle.base}>
            <OptionButton iconName={'chat'}/>  
            <OptionButton iconName={'user'}/> 
            <OptionButton iconName={'group'}/> 
            <OptionButton iconName={'notification'}/>           
        </View>
    )
}

export default Options;
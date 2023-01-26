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
            <OptionButton iconName={'chatbubble-ellipses-outline'}/>  
            <OptionButton iconName={'chatbubbles-outline'}/> 
            <OptionButton iconName={'person-outline'}/> 
            <OptionButton iconName={'notifications-outline'}/> 
            <OptionButton iconName={'menu-outline'}/>          
        </View>
    )
}

export default Options;
import React from "react";
import { View, Text } from "react-native";
import Style from './style/style';

const Header = ({title}) => {
    return(
        <View style={Style.header}>
            <Text style={Style.title}>
                {title}
            </Text>
        </View>
    );
}

export default Header;
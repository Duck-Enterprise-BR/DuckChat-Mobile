import React from "react";
import { View, Text } from "react-native";
import HeaderStyle from '../styles/components/HeaderStyle';

const Header = ({title}) => {
    return(
        <View style={HeaderStyle.header}>
            <Text style={HeaderStyle.title}>
                {title}
            </Text>
        </View>
    );
}

export default Header;
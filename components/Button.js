import { View, Text, VirtualizedList } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import ButtonStyle from "../styles/components/ButtonStyle"

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const BorderRadius = RFValue(5);

const Button = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={ButtonStyle.base}>
            <Text style={ButtonStyle.ButtonText} >{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;
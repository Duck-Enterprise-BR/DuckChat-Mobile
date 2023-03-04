import { StyleSheet } from "react-native";
import Colors from "../../../colors/index";
import { RFValue } from "react-native-responsive-fontsize";

const BorderRadius = RFValue(5);
const FontSize = RFValue(18);
const Height = RFValue(35);

const ButtonStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.black,
        borderRadius: BorderRadius,
        height: Height,
        alignItems: 'center',
        justifyContent: 'center'
    },

    ButtonText: {
        fontSize: FontSize,
        color: Colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});

export default ButtonStyle;
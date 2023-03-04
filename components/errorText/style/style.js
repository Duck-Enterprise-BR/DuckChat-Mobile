import { StyleSheet } from "react-native";
import Colors from "../../../colors/index";

const ErrorTextStyle = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        alignSelf: 'baseline',
        textTransform: 'uppercase',
        fontSize: 9,
        color: Colors.redError,
    },
})

export default ErrorTextStyle;
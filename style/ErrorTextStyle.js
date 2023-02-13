import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";

const ErrorTextStyle = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        alignSelf: 'baseline',
        textTransform: 'uppercase',
        fontSize: 9,
        color: Colors.redError,
    },

    base:{

    }
})

export default ErrorTextStyle;
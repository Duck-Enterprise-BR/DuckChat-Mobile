import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";

const OptionButtonStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.gray,
        height: '100%',
        width: '15%',
        //alignSelf: 'center',
        flex: 1,
    },

    button: {
        backgroundColor: Colors.violet,
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column-reverse',
    },

    icon: {
        color: Colors.white,
        marginVertical: 5
    }
})

export default OptionButtonStyle;
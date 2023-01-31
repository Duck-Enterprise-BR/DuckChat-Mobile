import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";

const OptionButtonStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.gray3,
        height: '100%',
        width: '15%',
        //alignSelf: 'center',
        flex: 1,
        borderRadius: 50
    },

    button: {
        backgroundColor: Colors.white,
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column-reverse',
        borderRadius: 50
    },

    icon: {
        color: Colors.orange,
        //marginVertical: 10
    },

    borderEnd: {
        backgroundColor: Colors.white,
        height: '2%',
        width: '100%'
    }
})

export default OptionButtonStyle;
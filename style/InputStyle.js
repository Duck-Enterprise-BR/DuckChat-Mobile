import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";

const InputStyle = StyleSheet.create({
    input: {
        height: 50,
        width: 300,
        margin: 10,
        borderWidth: 1,
        borderColor: Colors.violet,
        borderRadius: 5,
        padding: 10,
    },

    title: {
        fontWeight: 'bold',
        alignSelf: 'baseline',
        textTransform: 'uppercase',
        fontSize: 13,
        color: Colors.violet2,
        marginHorizontal: 10,
        marginTop: 10
    },

    error: {
        fontWeight: 'bold',
        alignSelf: 'baseline',
        textTransform: 'uppercase',
        fontSize: 9,
        color: Colors.redError,
        marginHorizontal: 10,
        marginBottom: 10
    }
})

export default InputStyle;
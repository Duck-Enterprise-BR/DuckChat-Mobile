import { StyleSheet } from "react-native";
import Colors from "../../colors/Colors";

const ButtonStyle = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },

    ButtonContainer: {
        elevation: 8,
        backgroundColor: Colors.orange,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12
    },

    ButtonText: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    }
});

export default ButtonStyle;
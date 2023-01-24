import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";
import { Ionicons } from '@expo/vector-icons'

const InputStyle = StyleSheet.create({
    input: {
        height: 50,
        width: '90%',
        //margin: 10,
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
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 5,
    },

    error: {
        fontWeight: 'bold',
        alignSelf: 'baseline',
        textTransform: 'uppercase',
        fontSize: 9,
        color: Colors.redError,
        marginHorizontal: 20,
    }, 
    
    base: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        flexDirection: 'column',
    },

    showPassword: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: '2%',
        marginEnd: '5%',
    },

    showPasswordText: {
        color: Colors.violet2
    }
})

export default InputStyle;
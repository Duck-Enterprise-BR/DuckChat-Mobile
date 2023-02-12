import { StyleSheet } from "react-native";
import Colors from "../../Colors/Colors";

const ProfileStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center'
    },

    profileImagem: {
        height: 150,
        width: 150,
        borderRadius: 150 / 2
    },

    profileImageBase: {
        backgroundColor: Colors.white,
        marginTop: '5%',
        height: '25%',
        width: '100%',
        alignItems: 'center',   
    },

    namebase: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.white
    },

    name: {
        color: Colors.gray6,
        fontSize: 20
    },

    emailBase: {

    }
})

export default ProfileStyle;
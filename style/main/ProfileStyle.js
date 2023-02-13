import { StyleSheet } from "react-native";
import Colors from "../../Colors/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const ProfileImageSize = RFValue(100);
const HeaderBorderRadius = RFValue(40);

const ProfileStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center'
    },

    header: {
        backgroundColor: Colors.white,
        height: RFValue(200),
        width: '100%',
        flexDirection: 'row',
        borderBottomLeftRadius: HeaderBorderRadius,
        borderBottomRightRadius: HeaderBorderRadius,
        elevation: 10
    },

    profileImagem: {
        marginTop: '15%',
        marginLeft: '7%',
        height: ProfileImageSize,
        width: ProfileImageSize,
        borderRadius: RFValue(20),
        borderWidth: 3,
        borderColor: Colors.white,
    },

    name: {
        color: Colors.gray4,
        fontSize: RFValue(20),
        marginTop: '50%',
        marginLeft: '5%',
        fontWeight: 'bold'
    },

    username: {
        color: Colors.gray5,
        fontSize: RFValue(12),
        marginTop: '0%',
        marginLeft: '5%',
    },

    emailBase: {
        
    }
})

export default ProfileStyle;
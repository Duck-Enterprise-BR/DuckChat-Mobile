import { StyleSheet } from "react-native";
import Colors from "../../../../colors";
import { RFValue } from "react-native-responsive-fontsize";

const ProfileImageSize = RFValue(100);
const HeaderBorderRadius = RFValue(10);
const FriendTextSize = RFValue(23);
const FriendHeaderBorderRadius = RFValue(10);
const Width = '100%';

const ProfileStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center'
    },

    header: {
        backgroundColor: Colors.white,
        height: RFValue(150),
        width: Width,
        flexDirection: 'row',
        borderBottomLeftRadius: HeaderBorderRadius,
        borderBottomRightRadius: HeaderBorderRadius,
        elevation: 5
    },

    profileImagem: {
        marginTop: '7%',
        marginLeft: '5%',
        height: ProfileImageSize,
        width: ProfileImageSize,
        borderRadius: RFValue(20),
        borderWidth: 3,
        borderColor: Colors.white,
    },

    name: {
        color: Colors.gray4,
        fontSize: RFValue(20),
        marginTop: '25%',
        marginLeft: '5%',
    },

    username: {
        color: Colors.gray5,
        fontSize: RFValue(12),
        marginTop: '0%',
        marginLeft: '5%',
    },
})

export default ProfileStyle;
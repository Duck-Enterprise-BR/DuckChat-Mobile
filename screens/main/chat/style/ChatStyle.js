import { StyleSheet } from "react-native";
import Colors from '../../../../colors';
import { RFValue } from "react-native-responsive-fontsize";

const TabBarBorderRadius = RFValue(50);

const ChatStyle = StyleSheet.create({
    tabBar: {
        borderRadius: TabBarBorderRadius,
        width: "40%",
        alignSelf: 'center',
        marginVertical: "5%"
    },

});

export default ChatStyle;
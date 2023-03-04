import { View, Text } from "react-native";
import Style from "./style/style";

const ErrorText = ({errorText}) => {
    return(
        <View style={Style.base}>
            <Text style={Style.text}>
                {errorText}
            </Text>
        </View>
    )
}

export default ErrorText;
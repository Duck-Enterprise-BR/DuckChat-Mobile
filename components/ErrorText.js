import { View, Text } from "react-native";
import ErrorTextStyle from "../styles/components/ErrorTextStyle";

const ErrorText = ({errorText}) => {
    return(
        <View style={ErrorTextStyle.base}>
            <Text style={ErrorTextStyle.text}>
                {errorText}
            </Text>
        </View>
    )
}

export default ErrorText;
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import Style from "./style/style"

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Button = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={Style.base}>
            <Text style={Style.ButtonText} >{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;
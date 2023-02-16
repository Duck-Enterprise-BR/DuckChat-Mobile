import { View, Text, VirtualizedList } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";
import { RFValue } from "react-native-responsive-fontsize";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const BorderRadius = RFValue(5);

const TesteButton = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.base}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: Colors.orange,
        width: 200,
        height: 100,
        alignItems: 'center',
        marginTop: 100,
        borderRadius: BorderRadius
    }
});

export default TesteButton;
import { Text, StyleSheet } from "react-native"
import { useFonts } from 'expo-font';

const StyledText = ({text, style}) => {
    const [fontsLoaded] = useFonts({
        RobotoMedium: require("../assets/fonts/roboto-mono/RobotoMono-Medium.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Text style={[ styles.text, style]}> {text} </Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "RobotoMedium"
    }
});
export default StyledText;
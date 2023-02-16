import { View } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";
import Button from "../components/Button";
import TesteButton from "../components/TesteButton";
import Login from '../screens/initial/Login'

const ScreenTeste = () => {
    return(
        <View>
            <Login/>
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: Colors.orange,
    }
});

export default ScreenTeste;
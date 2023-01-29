import React from 'react';
import { Platform, View, Text } from 'react-native';
import Button from '../components/Button';
import RegisterStyle from '../style/RegisterStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import TextButton from '../components/TextButton';
import Input from '../components/Input';
import axios from 'axios';
import Api from '../api/Api';
import Toast from 'react-native-toast-message';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { useNavigation } from '@react-navigation/native';

const Register = ({ route }) => {
    const [textPassWord, onChangePassword] = React.useState('');
    const [textUsername, onChangeUsername] = React.useState('');
    const [isHidePasswordText, onChangeHidePasswordText] = React.useState(true);
    const navigatorScreen = useNavigation();

    function ShowPassword() {
        onChangeHidePasswordText(!isHidePasswordText)
    }

    function Login() {
        navigatorScreen.navigate('Login')
    }

    async function Register() {
        function erro(error) {
            console.log("Error: ", error.response.data)
        }

        function pass(response) {
            console.log(response.data)
            var message = ('Account created sucessfully')
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: message
            })

            navigatorScreen.navigate('Login')
        }

        let data = {
            "email": route.params?.textEmail,
            "password": textPassWord,
            "username": textUsername,
            "name": route.params?.textName
        }

        const config = axios.create = {
            method: 'post',
            url: '/user',
            data: data
        }

        await Api(config)
            .then((response) => { pass(response) })
            .catch((error) => { erro(error) })
    }

    return (
        <View style={RegisterStyle.base}>
            <StatusBar style='auto' />
            <View style={RegisterStyle.login}>
            <Text style={RegisterStyle.screenName}>{'Register'}</Text>
                <Input
                    title='Create a Username'
                    onChangeText={onChangeUsername}
                    placeHolder='Example: srpatos'
                    text={textUsername}
                />

                <Input
                    title='Create a Password'
                    onChangeText={onChangePassword}
                    placeHolder='Example: MasterPato@2000'
                    text={textPassWord}
                    onChangeHideText={ShowPassword}
                    isHidePassword={isHidePasswordText}
                    showSecureText={"Show password"}
                />
                <View style={RegisterStyle.registerButton}>
                    <TextButton
                        title="You already have an account? login here"
                        onPress={Login}
                    />
                    <Button
                        title='Register'
                        onPress={Register}
                    />
                </View>
            </View>
            <Header title=''/>
        </View>
    );
}

export default Register;
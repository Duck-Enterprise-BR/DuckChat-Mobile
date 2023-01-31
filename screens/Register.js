import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import RegisterStyle from '../style/RegisterStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import TextButton from '../components/TextButton';
import Input from '../components/Input';
import axios from 'axios';
import Api from '../api/Api';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import ErrorText from '../components/ErrorText';
import OptionButton from '../components/OptionButton';

const Register = ({ route }) => {
    const [textPassWord, onChangePassword] = React.useState('');
    const [textUsername, onChangeUsername] = React.useState('');
    const [isHidePasswordText, onChangeHidePasswordText] = React.useState(true);

    const [textError, onChangeTextError] = React.useState('');

    const [isvalidUsername, onChangeIsvalidUsername] = React.useState(true);
    const [isvalidPassword, onChangeIsvalidPassword] = React.useState(true);

    const [validInputUsername, OnChageValidInputUsername] = React.useState(true);
    const [validInputPassword, OnChageValidInputPassword] = React.useState(true);

    const navigatorScreen = useNavigation();

    useEffect(() => {
        onChangeIsvalidPassword(textPassWord.length >= 8)
        onChangeIsvalidUsername(textUsername.length >= 4)
    })

    function ShowPassword() {
        onChangeHidePasswordText(!isHidePasswordText)
    }

    function Login() {
        navigatorScreen.navigate('Login')
    }

    function Back() {
        navigatorScreen.navigate('UserInformation')
    }

    async function Register() {
        function erro(error) {
            console.log("Error: ", error.response.data)
            onChangeTextError("Erro code: " + error.response.data.statusCode + "\n" + error.response.data.message);

            OnChageValidInputUsername(isvalidUsername);
            OnChageValidInputPassword(isvalidPassword);
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
            <View style={RegisterStyle.back}>
                <Button />
            </View>

            <View style={RegisterStyle.login}>

                <Text style={RegisterStyle.screenName}>{'Register'}</Text>

                <Input
                    title='Create a Username'
                    onChangeText={onChangeUsername}
                    placeHolder='Example: srpatos'
                    text={textUsername}
                    validInput={validInputUsername}
                    errorText={"username must be longer than or equal to 4 characters"}
                />

                <Input
                    title='Create a Password'
                    onChangeText={onChangePassword}
                    placeHolder='Example: MasterPato@2000'
                    text={textPassWord}
                    onChangeHideText={ShowPassword}
                    isHidePassword={isHidePasswordText}
                    showSecureText={"Show password"}
                    validInput={validInputPassword}
                    errorText={"Password must be longer than or equal to 8 characters"}
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
                <ErrorText errorText={textError} />
            </View>
            <View style={RegisterStyle.back}>
                <OptionButton
                iconName={"arrow-back-outline"}
                onPress={Back}
                />
            </View>
            <Header title='' />

        </View>
    );
}

export default Register;
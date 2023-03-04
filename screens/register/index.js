import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import Api from '../../api';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

//Components
import Header from '../../components/header';
import TextButton from '../../components/textButton';
import Input from '../../components/input';
import ErrorText from '../../components/errorText';
import OptionButton from '../../components/optionButton';
import Button from '../../components/button';

import Style from './style/style';

const Register = ({ navigation }) => {
    const [textPassWord, onChangePassword] = React.useState('');
    const [textUsername, onChangeUsername] = React.useState('');
    const [isHidePasswordText, onChangeHidePasswordText] = React.useState(true);

    const [textError, onChangeTextError] = React.useState('');

    const [isvalidUsername, onChangeIsvalidUsername] = React.useState(true);
    const [isvalidPassword, onChangeIsvalidPassword] = React.useState(true);

    const [validInputUsername, OnChageValidInputUsername] = React.useState(true);
    const [validInputPassword, OnChageValidInputPassword] = React.useState(true);

    navigatorScreen = useNavigation();

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

            //navigatorScreen.navigate('Login')
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
        <View style={Style.base}>
            <StatusBar style='auto' />
            <View style={Style.login}>
                <View style={Style.back}>
                    <OptionButton
                        iconName={"arrow-back-outline"}
                        onPress={Back}
                    />
                </View>
                <Text style={Style.screenName}>{'Register'}</Text>
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
                    isHideText={isHidePasswordText}
                    showSecureText={"Show password"}
                    validInput={validInputPassword}
                    errorText={"Password must be longer than or equal to 8 characters"}
                />
                <View style={Style.registerButton}>
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
        </View>
    );
}

export default Register;
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TextButton from '../../components/TextButton';
import validator from 'validator';
import axios from 'axios';
import Api from '../../api/Api';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Compo
import ErrorText from '../../components/ErrorText';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

import LoginStyle from '../../styles/initial/LoginStyle';
import DataKeys from '../../keys/DataKeys';

const LoginScreen = ({ navigation }) => {
    const [textEmail, onChangeEmail] = React.useState('');
    const [textPassWord, onChangePassword] = React.useState('');
    const [isValidEmail, onChangeStateEmail] = React.useState(true);
    const [isHidePasswordText, onChangeHidePasswordText] = React.useState(true);

    const [textError, onChangeTextError] = React.useState('');

    function ShowPassword() {
        onChangeHidePasswordText(!isHidePasswordText)
    }

    async function StoreData(key, data){
        try {
            await AsyncStorage.setItem(key, data);
        } catch (error) {
            console.log("Store Data error: " + error);
        }
    }

    async function Login() {
        onChangeStateEmail(validator.isEmail(textEmail));
    
        const data = {
            "email": textEmail,
            "password": textPassWord
        }

        //console.log(data)

        function erro(error) {
            console.log("Error: ", error.response.data)

            onChangeTextError("Erro code: " + error.response.data.statusCode);
        }

        function pass(response) {
            console.log(response.data)
            onChangeTextError('');
            var message = ('Successfully Logged in')
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: message
            })
            
            const user_data = JSON.stringify(response.data);
            StoreData(DataKeys.USER_LOCAL_DATA, JSON.stringify(user_data));
            
            navigation.reset({
                index: 0,
                routes: [{ name: 'Main' }]
            })
        }

        const config = axios.create = {
            method: 'post',
            url: '/auth/login',
            data: data
        }

        await Api(config)
            .then((response) => { pass(response) })
            .catch((error) => { erro(error) })
    }

    function Register() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'UserInformation' }]
        })
    }

    return (
        <View style={LoginStyle.base}>
            <StatusBar style='auto' />
            <View style={LoginStyle.login}>
                <Text style={LoginStyle.screenName}>
                    Login
                </Text>
                <Input
                    title='Your Email'
                    onChangeText={onChangeEmail}
                    placeHolder='srpatos@email.com'
                    text={textEmail}
                    errorText='Invalid Email'
                    validInput={isValidEmail}
                />

                <Input
                    title='Your Password'
                    onChangeText={onChangePassword}
                    placeHolder='MasterPato@2000'
                    text={textPassWord}
                    onChangeHideText={ShowPassword}
                    isHideText={isHidePasswordText}
                    showSecureText={"Show password"}
                />
                <View style={LoginStyle.loginButton}>
                    <TextButton
                        title="Don't have an account? create one here"
                        onPress={Register}
                    />
                    <Button
                        title='Login'
                        onPress={Login}
                    />
                </View>
                <ErrorText
                    errorText={textError}
                />
            </View>
            <Header
                title=''
            />
        </View>
    );
}

export default LoginScreen;
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import LoginStyle from '../style/LoginStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import TextButton from '../components/TextButton';
import validator from 'validator';
import Input from '../components/Input';

const LoginScreen = ({ navigation }) => {
    //const validator = require('validator');
    //const isEmail = validator.isEmail(textEmail); 
    
    const [textEmail, onChangeEmail] = React.useState('');
    const [textPassWord, onChangePassword] = React.useState('');
    
    const [isValidEmail, onChangeStateEmail] = React.useState(true);
    var isValidPassword = true;

    function Login() {
        onChangeStateEmail(validator.isEmail(textEmail));
    }

    function Register() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Register' }]
        })
    }

    return (
        <View style={LoginStyle.base}>
            <StatusBar style='auto'/>

            <Header
                title='Login'
            />

            <View style={LoginStyle.login}>
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
                    errorText='Invalid Password'
                    validInput={isValidPassword}
                />

                <Button
                    title='Login'
                    onPress={Login}
                />

                <TextButton
                    title="Don't have an account? create one here"
                    onPress={Register}
                />
            </View>
        </View>
    );
}

export default LoginScreen;
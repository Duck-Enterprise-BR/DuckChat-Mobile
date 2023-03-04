import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TextButton from '../../components/textButton';
import validator from 'validator';

//Compo
import ErrorText from '../../components/errorText';
import Input from '../../components/input';
import Button from '../../components/button';

import Style from './style/style';
import DataKeys from '../../keys/DataKeys';
import { Post } from '../../api/index';

const Login = ({ navigation }) => {
    const [textEmail, onChangeEmail] = React.useState('');
    const [textPassWord, onChangePassword] = React.useState('');
    const [isValidEmail, onChangeStateEmail] = React.useState(true);
    const [isHidePasswordText, onChangeHidePasswordText] = React.useState(true);
    const [textError, onChangeTextError] = React.useState('');

    function ShowPassword() {
        onChangeHidePasswordText(!isHidePasswordText)
    }

    async function Login() {
        onChangeStateEmail(validator.isEmail(textEmail));

        let test = Post();
        console.log(test)

        navigation.navigate('Main');

        const data = {
            "email": textEmail,
            "password": textPassWord
        }

        function Error(error) {
            console.log("Error: ", error.response.data)
            onChangeTextError("Erro code: " + error.response.data.statusCode);
        }

        function Pass(response) {
            console.log(response.data);
            onChangeTextError('');
            
            navigation.navigate('Main');
        }
    }

    function Register() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'UserInformation' }]
        })
    }

    return (
        <View style={Style.base}>
            <StatusBar/>
            <View style={Style.login}>
                <Text style={Style.screenName}>
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
                <View style={Style.loginButton}>
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
        </View>
    );
}

export default Login;
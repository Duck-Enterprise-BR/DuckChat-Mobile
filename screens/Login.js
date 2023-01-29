import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Button from '../components/Button';
import LoginStyle from '../style/LoginStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import TextButton from '../components/TextButton';
import validator from 'validator';
import Input from '../components/Input';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const LoginScreen = ({ navigation }) => {
    const [textEmail, onChangeEmail] = React.useState('');
    const [textPassWord, onChangePassword] = React.useState('');
    const [isValidEmail, onChangeStateEmail] = React.useState(true);
    const [isHidePasswordText, onChangeHidePasswordText] = React.useState(true);

    function ShowPassword() {
        onChangeHidePasswordText(!isHidePasswordText)
    }

    function Login() {
        onChangeStateEmail(validator.isEmail(textEmail));
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
                    placeHolder='Example: MasterPato@2000'
                    text={textPassWord}
                    onChangeHideText={ShowPassword}
                    isHidePassword={isHidePasswordText}
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
            </View>
            <Header
                title=''
            />
        </View>
    );
}

export default LoginScreen;
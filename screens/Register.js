import React from 'react';
import { TextInput, Text, View, ScrollView } from 'react-native';
import Button from '../components/Button';
import RegisterStyle from '../style/RegisterStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import TextButton from '../components/TextButton';
import Input from '../components/Input';
import validator from 'validator';

const Register = ({ navigation }) => {
    const [textEmail, onChangeEmail] = React.useState('');
    const [textPassWord, onChangePassword] = React.useState('');
    const [textName, onChangeName] = React.useState('');
    const [textUserName, onChangeUserName] = React.useState('');

    const [isValidEmail, onChangeStateEmail] = React.useState(true);

    function Login() {
        console.log('Next screen')
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    function Register() {
        onChangeStateEmail(validator.isEmail(textEmail));
    }

    return (
        <View style={RegisterStyle.base}>
            <StatusBar style='auto' />

            <Header
                title='Register'
            />

            <View style={RegisterStyle.register}>
                <Input
                    title='Your name'
                    onChangeText={onChangeEmail}
                    placeHolder='srpatos@email.com'
                    text={textName}
                />
                <Input
                    title='Create a username'
                    onChangeText={onChangeEmail}
                    placeHolder='srpatos@email.com'
                    text={textUserName}
                    errorText='create a username with 4 or more characters'
                />
                <Input
                    title='Your Email'
                    onChangeText={onChangeEmail}
                    placeHolder='srpatos@email.com'
                    text={textEmail}
                    errorText='Invalid Email'
                    validInput={isValidEmail}
                />

                <Input
                    title='Create a Password'
                    onChangeText={onChangePassword}
                    placeHolder='MasterPato@2000'
                    text={textPassWord}
                    errorText='create a password with 8 or more characters'
                />

                <Button
                    title='Register'
                    onPress={Register}
                />

                <TextButton
                    title="Do you have an account? login here"
                    onPress={Login}
                />
            </View>
        </View>
    );
}

export default Register;
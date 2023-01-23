import React from 'react';
import { TextInput, Text, View } from 'react-native';
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

    function Register() {
        if(validator.isEmail(textEmail)) {
            onChangeStateEmail(true);
            console.log('valid')
        } else{
            console.log('Invalid Email');
            onChangeStateEmail(false);
        }
    }

    function Login() {
        console.log('Next screen')
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
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
                    onChangeText={onChangeName}
                    placeHolder='Example: Pato'
                    text={textName}
                />

                <Input
                    title='Create a username'
                    onChangeText={onChangeUserName}
                    placeHolder='Example: SrPatoS'
                    text={textUserName}
                />

                <Input
                    title='Your Email'
                    onChangeText={onChangeEmail}
                    placeHolder='Example: srpatos@email.com'
                    text={textEmail}
                    validInput={isValidEmail}
                    errorText='Invalid email'
                />

                <Input
                    title='Create a password'
                    onChangeText={onChangePassword}
                    placeHolder='Example: MasterPato@2000'
                    text={textPassWord}
                />

                <Button
                    title='Register'
                    onPress={Register}
                />

                <TextButton
                    title="Do you have an account? log in"
                    onPress={Login}
                />
            </View>
        </View>
    );
}

export default Register;
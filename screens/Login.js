import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';
import LoginStyle from '../style/LoginStyle/LoginStyle';
import Colors from '../Colors/Colors';
import Button from '../components/Button';

const Login = () => {
    const [textEmail, onChangeEmail] = React.useState();
    const [textPassWord, onChangePassword] = React.useState();
    return (
        <SafeAreaView>
            <Text style={LoginStyle.textLogin}>
                Login
            </Text>

            <TextInput
                style={LoginStyle.input}
                onChangeText={onChangeEmail}
                placeholder="Email"
                value={textEmail}
            />
            <TextInput
                style={LoginStyle.input}
                onChangeText={onChangePassword}
                placeholder="Password"
                value={textPassWord}
            />
            <Button
                title="Login"
            />

            <Text style={LoginStyle.textRegister}>
                or register
            </Text>
        </SafeAreaView>
    );
};

export default Login;
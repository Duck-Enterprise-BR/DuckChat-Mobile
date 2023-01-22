import React from "react";
import { TextInput, Text, View } from 'react-native';
import Button from '../components/Button';
import RegisterStyle from "../style/RegisterStyle";
import { StatusBar } from 'expo-status-bar';
import Header from "./Header";

const Register = () => {

    const [textEmail, onChangeEmail] = React.useState();
    const [textPassWord, onChangePassword] = React.useState();

    return (
        <View style={RegisterStyle.base}>
            <StatusBar style="auto"/>
            
            <Header
                title='Register'
            />

            <View style={RegisterStyle.register}>
            
                <TextInput
                    style={RegisterStyle.input}
                    onChangeText={onChangeEmail}
                    placeholder="Email"
                    value={textEmail}
                />
                <TextInput
                    style={RegisterStyle.input}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    value={textPassWord}
                />
                <Button
                    title="Register"
                />

                <Text style={RegisterStyle.textRegister}>
                    log in
                </Text>
            </View>
        </View>
    );
}

export default Register;
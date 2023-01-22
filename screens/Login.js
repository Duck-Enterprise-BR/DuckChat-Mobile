import React from 'react';
import { TextInput, Text, View } from 'react-native';
import Button from '../components/Button';
import LoginStyle from '../style/LoginStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import TextButton from '../components/TextButton';

const LoginScreen = ({navigation}) => {

    function Login(){
        console.log('Next screen')
        navigation.reset({
            index: 0,
            routes: [{name: 'Chat'}]
        })
    }

    function Register(){
        console.log('Next screen')
        navigation.reset({
            index: 0,
            routes: [{name: 'Register'}]
        })
    }

    const [textEmail, onChangeEmail] = React.useState();
    const [textPassWord, onChangePassword] = React.useState();

    return (
        <View style={LoginStyle.base}>
            <StatusBar style='auto' />

            <Header
                title='Login'
            />

            <View style={LoginStyle.login}>
                <Text style={LoginStyle.textInfo}>Your Email</Text>
                <TextInput
                    style={LoginStyle.input}
                    onChangeText={onChangeEmail}
                    placeholder='srpatos@email.com'
                    value={textEmail}
                />

                <Text style={LoginStyle.textInfo}>Your Password</Text>

                <TextInput
                    style={LoginStyle.input}
                    onChangeText={onChangePassword}
                    placeholder='MasterPato@2000'
                    value={textPassWord}
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
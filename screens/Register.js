import React from 'react';
import { TextInput, Text, View } from 'react-native';
import Button from '../components/Button';
import RegisterStyle from '../style/RegisterStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import TextButton from '../components/TextButton';

const Register = ({navigation}) => {
    const [textEmail, onChangeEmail] = React.useState();
    const [textPassWord, onChangePassword] = React.useState();
    const [textName, onChangeName] = React.useState();
    const [textUserName, onChangeUserName] = React.useState();

    function Login() {
        console.log('Next screen')
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    return (
        <View style={RegisterStyle.base}>
            <StatusBar style='auto' />

            <Header
                title='Register'
            />

            <View style={RegisterStyle.register}>

                <Text style={RegisterStyle.textInfo}>Your Name</Text>
                <TextInput
                    style={RegisterStyle.input}
                    onChangeText={onChangeName}
                    placeholder='Example: Pato'
                    value={textName}
                />

                <Text style={RegisterStyle.textInfo}>Create a UserName</Text>
                <TextInput
                    style={RegisterStyle.input}
                    onChangeText={onChangeUserName}
                    placeholder='Example: SrPatoS'
                    value={textUserName}
                />

                <Text style={RegisterStyle.textInfo}>Your Email</Text>
                <TextInput
                    style={RegisterStyle.input}
                    onChangeText={onChangeEmail}
                    placeholder='Example: srpatos@email.com'
                    value={textEmail}
                />

                <Text style={RegisterStyle.textInfo}>Create a Password</Text>

                <TextInput
                    style={RegisterStyle.input}
                    onChangeText={onChangePassword}
                    placeholder='Example: MasterPato@2000'
                    value={textPassWord}
                />

                <Button
                    title='Register'
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
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import validator from 'validator';
import Input from '../components/Input';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import UserInformationStyle from '../style/UserInformationStyle';
import { useNavigation } from '@react-navigation/native';
import TextButton from '../components/TextButton';

const UserInformation = ({ navigation }) => {
    const [textEmail, onChangeEmail] = React.useState('');
    const [textName, onChangeName] = React.useState('');

    const [isValidEmail, onChangeStateEmail] = React.useState(false);
    const [isValidName, onChangeStateName] = React.useState(false)

    const navigatorScreen = useNavigation();

    function NextScreen() {
        onChangeStateEmail(validator.isEmail(textEmail))
        onChangeStateName(textName.length > 0)
        if (isValidEmail && isValidName) {
            navigatorScreen.navigate('Register', { textEmail, textName })
        }
    }
    
    function Login() {
        navigatorScreen.navigate('Login')
    }

    return (
        <View style={UserInformationStyle.base}>
            <StatusBar style='auto' />
            <View style={UserInformationStyle.login}>
                <Text style={UserInformationStyle.screenName}>{'Register'}</Text>
                <Input
                    title='Your Name'
                    onChangeText={onChangeName}
                    placeHolder='Patos'
                    text={textName}
                    errorText='Invalid Name'
                    validInput={isValidName}
                />

                <Input
                    title='Your Email'
                    onChangeText={onChangeEmail}
                    placeHolder='Example: srpatos@email.com'
                    text={textEmail}
                    errorText='Invalid Email'
                    validInput={isValidEmail}
                />
                <View style={UserInformationStyle.loginButton}>
                <TextButton
                        title="You already have an account? login here"
                        onPress={Login}
                    />
                    <Button
                        title='Next Screen'
                        onPress={NextScreen}
                    />
                </View>
            </View>
            <Header
                title=''
            />
        </View>
    );
}

export default UserInformation;
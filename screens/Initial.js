import React from 'react'
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import InitialStyle from '../style/InitialStyle';
import Button from '../components/Button';

import Input from '../components/Input';

const Initial = ({navigation}) => {

    const [textExample, onChangeTextExample] = React.useState('');

    function Login(){
        console.log('Next screen')
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
    }

    return (
        <View style={InitialStyle.base}>
            <StatusBar style='auto' />
            <Header
                title='Welcome to DuckChat'
            />

            <Input
                placeHolder="Example"
                title="Example"
                errorText="Error"
                validInput={false}
                onChangeText={onChangeTextExample}
            />

            <Text>{textExample}</Text>

            <View style={InitialStyle.next}>
                <Button
                    title='Next'
                    onPress={Login}
                />
            </View>

        </View>
    )
}

export default Initial;
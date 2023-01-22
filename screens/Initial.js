import React from 'react'
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import InitialStyle from '../style/InitialStyle';
import Button from '../components/Button';

const Initial = ({navigation}) => {
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
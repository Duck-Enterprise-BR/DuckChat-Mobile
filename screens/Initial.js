import React from 'react'
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import InitialStyle from '../style/InitialStyle';
import Button from '../components/Button';

const Initial = ({navigation}) => {
    function Login(){
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
    }

    return (
        <View style={InitialStyle.base}>
            <StatusBar style='auto' />
            <View style={InitialStyle.login}>
            <Text style={InitialStyle.screenName}>{'DuckChat'}</Text>
            </View>
            <View style={InitialStyle.next}>
                <Button
                    title='Next'
                    onPress={Login}
                />
            </View>
            <Header
                title=''
            />

        </View>
    )
}

export default Initial;
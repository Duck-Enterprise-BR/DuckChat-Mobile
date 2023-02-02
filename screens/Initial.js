import React from 'react'
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import InitialStyle from '../style/InitialStyle';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DataKeys from '../keys/DataKeys';
import { useEffect } from 'react';

const Initial = ({ navigation }) => {
    function Login() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    async function CheckUser() {
        try {
            const value = await AsyncStorage.getItem(DataKeys.USER_LOCAL_DATA);
            if (value !== null) {
                var user_data = JSON.parse(value);
                var data = JSON.parse(user_data);
                if (data.acessToken !== null) {
                    console.log("Looggg");
                }
            }

        } catch (error) {
            console.log("Get Data error: " + error);
        }
    }

    useEffect(() => {
        CheckUser();
    }, []);

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
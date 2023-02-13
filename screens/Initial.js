import React from 'react'
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DataKeys from '../keys/DataKeys';
import { useEffect } from 'react';

const Initial = ({ navigation }) => {
    async function CheckUser() {
        const data = {
            ApplicationAccessed: true
        }

        const log_data = JSON.stringify(data);
        await AsyncStorage.setItem(DataKeys.USER_LOCAL_LOG, JSON.stringify(log_data));

        try {
            const user_local_data = await AsyncStorage.getItem(DataKeys.USER_LOCAL_DATA);
            const user_local_log = await AsyncStorage.getItem(DataKeys.USER_LOCAL_LOG);

            var user_data = JSON.parse(user_local_data);
            var user_log = JSON.parse(user_local_log);

            var acessData = JSON.parse(user_data);
            var logData = JSON.parse(user_log);
            
            if (acessData.acessToken) {
                console.log("Initial log: " + data.acessToken)
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Main" }]
                })
            } else{
                if(logData.ApplicationAccessed){
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }]
                    })
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
        <View>
            
        </View>
    )
}

export default Initial;
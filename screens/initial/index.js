import React from 'react'
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DataKeys from '../../keys/DataKeys';
import { useEffect } from 'react';

const Initial = ({ navigation }) => {
    useEffect(() => {
        CheckUser();
    }, []);

    async function CheckUser() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    return (
        <View>

        </View>
    )
}

export default Initial;
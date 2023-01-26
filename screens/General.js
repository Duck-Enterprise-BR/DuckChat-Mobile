import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import GeneralStyle from '../style/GeneralStyle';
import Options from './Options';

const General = () => {
    return (
        <View style={GeneralStyle.base}>
            <StatusBar style='auto' />
            <Header
                title='DuckChat'
            />
            <Options/>
        </View>
    )
}

export default General;
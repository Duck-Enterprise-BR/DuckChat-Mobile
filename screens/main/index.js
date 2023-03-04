import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Style from './style/style'
import Routes from './routes';

const Main = () => {
    return (
        <View style={Style.base}>
            <StatusBar/>
            <View style={Style.header}>
                <Text text={"DuckChat"} style={Style.headerTitle} />
            </View>
            <NavigationContainer independent={true}>
                <Routes/>
            </NavigationContainer>
        </View>
    );
}

export default Main;
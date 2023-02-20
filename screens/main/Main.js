import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Chat from './Chat';
import Notifications from './Notifications';
import Profile from './Profile';
import Colors from '../../colors/Colors';

import MainStyle from '../../styles/main/MainStyle';
import StyledText from '../../components/StyledText';
import { useFonts } from 'expo-font';

const Main = () => {
    const [fontsLoaded] = useFonts({
        RobotoMedium: require("../../assets/fonts/roboto-mono/RobotoMono-Medium.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={MainStyle.base}>
            <StatusBar style='auto' />
            <View style={MainStyle.header}>
                <StyledText text={"DuckChat"} style={MainStyle.headerTitle}/>
            </View>
            <NavigationContainer independent={true}>
                    <Tabs/>
                </NavigationContainer>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: true,
            tabBarLabelStyle: MainStyle.tabBarLabel,
            tabBarStyle: MainStyle.tabBar,
            tabBarIndicatorStyle: MainStyle.tabBarIndicator
        }}>
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

export default Main;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Chat from './Chat';
import Notifications from './Notifications';
import Profile from './Profile';
import Settings from './Settings';

import Colors from '../../colors/Colors';

import MainStyle from '../../style/MainStyle';

const Main = () => {
    return (
        <NavigationContainer independent={true}>
            <Tabs />
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerTintColor: Colors.orange,
                tabBarActiveTintColor: Colors.white,
                tabBarInactiveTintColor: Colors.orange,
                tabBarActiveBackgroundColor: Colors.orange,
                tabBarInactiveBackgroundColor: Colors.white,
                tabBarShowLabel: false,
                tabBarItemStyle: MainStyle.item,
                headerStyle: MainStyle.header,
            }}
        >
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-chatbubble-ellipses-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="notifications-outline" size={size} color={color}/>
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings-outline" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default Main;
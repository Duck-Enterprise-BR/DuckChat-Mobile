import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Chat from './Chat';
import Notifications from './Notifications';
import Profile from './Profile';
import Colors from '../../Colors/Colors';

const Main = () => {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DuckChat" component={Chat}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

export default Main;
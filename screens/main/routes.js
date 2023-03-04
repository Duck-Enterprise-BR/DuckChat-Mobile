import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from './chat/index'
import Notifications from './notifications/index'
import Profile from './profile/index'
import Style from './style/style'

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: true,
            tabBarLabelStyle: Style.tabBarLabel,
            tabBarStyle: Style.tabBar,
            tabBarIndicatorStyle: Style.tabBarIndicator
        }}>
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

export default Routes;
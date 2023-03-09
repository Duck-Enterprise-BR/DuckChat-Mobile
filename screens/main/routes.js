import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Style from './style/style'

import All from './chats/all/index';
import Friends from './chats/friends/index';
import Groups from './chats/groups/index';

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: true,
            tabBarLabelStyle: Style.tabBarLabel,
            tabBarStyle: Style.tabBar,
            tabBarIndicatorStyle: Style.tabBarIndicator
        }}>
            <Tab.Screen name="Conversas" component={All}/>
            <Tab.Screen name="Amigos" component={Friends}/>
            <Tab.Screen name="Grupos" component={Groups}/>
        </Tab.Navigator>
    );
}

export default Routes;
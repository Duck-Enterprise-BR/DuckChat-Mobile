import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

import All from "./chats/all";
import Friends from "./chats/friends";
import Groups from "./chats/groups";
import ChatStyle from "./style/ChatStyle";
import Colors from '../../../colors';

const Tab = createBottomTabNavigator();

const Chat = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: ChatStyle.tabBar,
                tabBarBadgeStyle: ChatStyle.badge,
                tabBarInactiveTintColor: Colors.gray3,
                tabBarActiveTintColor: Colors.orange
            }} >
                <Tab.Screen name="All" component={All} options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
                        ),
                    }
                } />
                <Tab.Screen name="Friends" component={Friends}
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="chatbubbles-outline"color={color} size={size} />
                            ),
                        }
                    } />
                <Tab.Screen name="Groups" component={Groups}
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="people-outline" color={color} size={size} />
                            ),
                        }
                    } />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Chat;
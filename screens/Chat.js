import React from 'react';
import { View, Text } from 'react-native';
import ChatStyle from '../style/ChatStyle';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';

const Chat = () => {
    return (
        <View style={ChatStyle.base}>
            <StatusBar style='auto' />
            <Header
                title='Chat'
            />
            <Text>
                Chat
            </Text>
        </View>
    )
}

export default Chat;
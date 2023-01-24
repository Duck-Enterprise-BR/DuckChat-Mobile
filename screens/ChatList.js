import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import ChatListStyle from '../style/ChatListStyle';
import Options from './Options';

const ChatList = () => {
    return (
        <View style={ChatListStyle.base}>
            <StatusBar style='auto' />
            <Header
                title='DuckChat'
            />
            <Options/>
        </View>
    )
}

export default ChatList;
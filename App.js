import React from 'react';
import Register from './screens/Register';
import Login from './screens/Login';
import Initial from './screens/Initial';
import { createStackNavigator, Screen } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ChatList from './screens/ChatList';

const Stack = createStackNavigator();

function App() {
  return (
    <ChatList/>
  );
}

export default App;
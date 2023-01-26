import React from 'react';
import Register from './screens/Register';
import Login from './screens/Login';
import Initial from './screens/Initial';
import { createStackNavigator, Screen } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import General from './screens/General';

const Stack = createStackNavigator();

function App() {
  return (
    <General/>
  );
}

export default App;
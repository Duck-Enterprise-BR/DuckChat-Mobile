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
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChatList" component={General} />
    </Stack.Navigator>
  );
}

export default App;
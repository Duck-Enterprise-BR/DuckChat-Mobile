import React from 'react';
import Register from './screens/Register';
import Login from './screens/Login';
import Initial from './screens/Initial';
import UserInformation from './screens/UserInformation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import General from './screens/General';
import Toast from 'react-native-toast-message';
import ToastConfig from './config/ToastConfig';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <AppNavigator />
        <Toast
        config={ToastConfig}
        autoHide={true}
        visibilityTime={2000}
        />
      </NavigationContainer>

  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChatList" component={General} />
      <Stack.Screen name="UserInformation" component={UserInformation} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default App;
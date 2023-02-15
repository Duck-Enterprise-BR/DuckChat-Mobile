import React from 'react';
import Register from './screens/initial/Register';
import Login from './screens/initial/Login';
import Initial from './screens/initial/Initial';
import UserInformation from './screens/initial/UserInformation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/main/Main';
import Toast from 'react-native-toast-message';
import ToastConfig from './config/ToastConfig';

const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <AppNavigator />
      <Toast
        config={ToastConfig}
        autoHide={true}
        visibilityTime={2000}
      />
    </NavigationContainer>
  )
}

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="UserInformation" component={UserInformation} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}


export default App;
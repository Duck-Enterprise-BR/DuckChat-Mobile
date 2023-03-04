import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Initial from './screens/initial/index';
import Login from './screens/login/index';
import Register from './screens/register/index';
import Main from './screens/main/index';
import UserInformation from './screens/userInformation/index';

const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <AppNavigator />
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
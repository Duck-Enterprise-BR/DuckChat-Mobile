import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Colors from './Colors/Colors';

export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

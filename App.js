import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hinh1 from './component/Hinh1';
import Hinh2 from './component/Hinh2';
import Hinh3 from './component/Hinh3';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hinh1" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Hinh1" component={Hinh1} />
        <Stack.Screen name="Hinh2" component={Hinh2} />
        <Stack.Screen name="Hinh3" component={Hinh3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();

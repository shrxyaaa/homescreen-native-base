import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import Notifications from './Screens/Notifications';
import MySpace from './Screens/MySpace';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {Avatar,NativeBaseProvider} from 'native-base'

export default function App() {

  
const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider >
    <NavigationContainer>
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconColor
        if (route.name === 'Home') {
          iconColor=focused?"green":"grey"
          return <MaterialIcons name="home-filled" size={24} color={iconColor} />
        } else if (route.name === 'Notifications') {
          iconColor=focused?"green":"grey"
          return  <MaterialCommunityIcons name="bell" size={24} color={iconColor} />
        }
        
        return <Avatar size="32px" source={{
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
        }} />
        
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}
     >
      <Tab.Screen tabBarIcom name="Home"  options={{headerShown:false}} component={HomeScreen} />
      <Tab.Screen name="MySpace"  options={{headerShown:false}} component={MySpace} />
      <Tab.Screen name="Notifications" options={{headerShown:false}} component={Notifications} />
    </Tab.Navigator> 
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

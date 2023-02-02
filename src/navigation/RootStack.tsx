/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';

import LoginScreen from '../screens/LoginScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import userStore from '../store/userStore';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

const Stack = createNativeStackNavigator<RootTabParamList>();

export default function RootStack() {
  const colorScheme = useColorScheme()
  const {user} = userStore;
  
  const startPage = user.isActive ? "Home" : "Login"

  return (
    <Stack.Navigator
      initialRouteName= {"Login" || startPage}
      screenOptions={{
        navigationBarColor: Colors[colorScheme].tint,
        headerBackVisible: false,
        header: () => <></>
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
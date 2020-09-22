import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, SafeAreaView, Modal } from 'react-native';
import SplashScreen from './screen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen';
import AuthNavigation from './navigation/AuthNavigation';
import routes from './navigation/routes';
import DashBoardNavigation from './navigation/DashBoardNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name={routes.DASHBOARD}  options={{headerShown: false}}  component={DashBoardNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

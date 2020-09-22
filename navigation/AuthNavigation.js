import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from '../screen/SplashScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthNavigation() {
    return (
        <>
            <Stack.Navigator >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </>
    )
}

const styles = StyleSheet.create({

})  

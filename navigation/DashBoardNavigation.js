import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import BasketScreen from '../screen/BasketScreen'
import HomeScreen from '../screen/HomeScreen'
import MeScreen from '../screen/MeScreen'
import routes from './routes'
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function DashBoardNavigation() {
    const navigation = useNavigation();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={routes.HOME} component={HomeScreen} />
                <Stack.Screen name={routes.BASKET} component={BasketScreen} />
                <Stack.Screen name={routes.ME} component={MeScreen} />
            </Stack.Navigator>

            <View style={styles.bottomContainer}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(routes.HOME)
                    }}>
                        <Image style={styles.logoContainer} source={require('../assets/favicon.png')} />
                        <Text>Home</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.tabContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(routes.BASKET)
                    }}>
                          <Image style={styles.logoContainer} source={require('../assets/favicon.png')} />
                        <Text>Basket</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(routes.ME)
                    }}>
                          <Image style={styles.logoContainer} source={require('../assets/favicon.png')} />
                        <Text>Me</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        width: "100%",
        flexDirection: "row",
    },

    tabContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
    },

    logoContainer: {
        width: 24,
        height: 24,
        alignSelf: "center",
        marginBottom: 4,
    }


})

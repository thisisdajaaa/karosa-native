import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LoginScreen() {
    return (
        <View style = {styles.container}>
            <Text>login screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#FFFFFF"
    }
})
 


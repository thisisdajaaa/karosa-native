import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Modal } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import { useFonts, CaveatBrush_400Regular } from '@expo-google-fonts/caveat-brush';
import { AppLoading } from 'expo';

export default function SplashScreen() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    CaveatBrush_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

    <>
      <View style={styles.container1}>
        <SafeAreaView style={styles.container}>

          <Text style={styles.text} onPress={() => {
            navigation.navigate('LoginScreenMain')
          }}>Karosa</Text>

          <View style={styles.line} />
        </SafeAreaView>

      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container1: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
  },



  line: {
    height: 3,
    width: 66,
    backgroundColor: '#73D673',
    top: 5
  },


  text: {
    fontFamily: "CaveatBrush_400Regular",
    color: "#73D673",
    fontSize: 66,
  },
})

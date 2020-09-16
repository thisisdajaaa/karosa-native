import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/ic_mobile_market.png')} style={styles.imageStyle} /> 
      {/* <Text>Open up App.js to startttt working on your app!</Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    flex : 1,
    alignSelf: 'center',
    height:'50px', 
    width:'50%'
  },
});

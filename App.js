import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/ic_mobile_market.png')} style={styles.imageStyle} /> 
      <View style={styles.line}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    width:'50%',
  },

  
  line: {
    height:'2px', 
    width:'50%',
    backgroundColor: '#73D673',
    top: '5px'
  },
  

  imageStyle: {
    height:'5%', 
    width:'100%',
    resizeMode: 'contain',
  },

});

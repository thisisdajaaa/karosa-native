import React , { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Button ,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import routes from './navigation/routes';
import DashBoardNavigation from './navigation/DashBoardNavigation';
import Modal from 'react-native-modal';
import {Formik} from 'formik'
import LoginScreen from './screen/LoginScreen';
const Stack = createStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name={routes.DASHBOARD}  options={{headerShown: false}}  component={DashBoardNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
      <Button title="Show modal" onPress={() => setModalVisible(true)} />
      <Modal
      isVisible={modalVisible} 
      onSwipeComplete = {()=>{
        setModalVisible(false)
      }}
      swipeDirection='down' 
      style={styles.modalContainer}>
          <LoginScreen/>
      </Modal>
      </>
  );
}

const styles = StyleSheet.create({
    modalContainer :{  
      justifyContent : "flex-end",
      margin : 0    
    }
});

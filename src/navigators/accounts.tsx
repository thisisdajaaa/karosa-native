import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserAccountMainScreen from "../screens/user-account";
import MyAddressScreen from "../screens/user-account/my-address";

const Stack = createStackNavigator();

const AccountsNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="User Account Main" component={MyAddressScreen} />
  </Stack.Navigator>
);

export default AccountsNavigator;

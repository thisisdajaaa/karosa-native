import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserAccountMainScreen from "../screens/user-account";

const Stack = createStackNavigator();

const AccountsNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="User Account Main" component={UserAccountMainScreen} />
  </Stack.Navigator>
);

export default AccountsNavigator;

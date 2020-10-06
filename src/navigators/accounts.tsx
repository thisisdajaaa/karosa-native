import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserAccountMainScreen from "../screens/user-account";
import AccountSettingsScreen from "../screens/user-account/account-settings";

const Stack = createStackNavigator();

const AccountsNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="User Account Main" component={UserAccountMainScreen} />
    <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
  </Stack.Navigator>
);

export default AccountsNavigator;

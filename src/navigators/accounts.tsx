import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserAccountMainScreen from "../screens/user-account";
import AccountSettingsScreen from "../screens/user-account/account-settings";
import EditProfileScreen from "../screens/user-account/edit-profile";
import SocialMediaScreen from "../screens/user-account/social-media";

const Stack = createStackNavigator();

const AccountsNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="User Account Main" component={UserAccountMainScreen} />
    <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
    <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    <Stack.Screen name="Social Media Accounts" component={SocialMediaScreen} />
  </Stack.Navigator>
);

export default AccountsNavigator;

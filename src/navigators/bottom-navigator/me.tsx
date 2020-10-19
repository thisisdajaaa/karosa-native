import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserAccountMainScreen from "@app/screens/user-account/main";
import EditProfileScreen from "@app/screens/user-account/edit-profile";
import AccountSettingsScreen from "@app/screens/user-account/account-settings";
import SocialMediaScreen from "@app/screens/user-account/social-media";
import ShopMainScreen from "@app/screens/shop/main";

const Stack = createStackNavigator();

const MeBottomNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="User Account Main" component={UserAccountMainScreen} />
    <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
    <Stack.Screen name="Social Media Accounts" component={SocialMediaScreen} />

    {/* <Stack.Screen name="Delete Account" component={DeleteAccountScreen} />
    <Stack.Screen name="Logout" component={LogoutScreen} /> */}

    <Stack.Screen name="Shop Main" component={ShopMainScreen} />
  </Stack.Navigator>
);

export default MeBottomNavigator;

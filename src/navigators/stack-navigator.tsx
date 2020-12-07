import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@app/screens/auth/login";
import ForgotScreen from "@app/screens/auth/forgot";
import HelpScreen from "@app/screens/auth/help";
import SplashScreen from "@app/screens/splash";
import AccountSettingsScreen from "@app/screens/user-account/account-settings";
import EditProfileScreen from "@app/screens/user-account/edit-profile";
import SocialMediaScreen from "@app/screens/user-account/social-media";
import MyProducts from "@app/screens/products/my-products";
import SearchProduct from "@app/screens/products/search-product";

import { TabNavigator } from "./tab-navigator";
import NewAddressScreen from "@app/screens/user-account/new-address";
import MyAddressScreen from "@app/screens/user-account/my-address";

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Home" component={TabNavigator} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="Forgot Password" component={ForgotScreen} />
    <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
    <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    <Stack.Screen name="Social Media Accounts" component={SocialMediaScreen} />
    <Stack.Screen name="My Products" component={MyProducts} />
    <Stack.Screen name="Search Product" component={SearchProduct} />
    <Stack.Screen name="New Address" component={NewAddressScreen} />
    <Stack.Screen name="My Address" component={MyAddressScreen} />
  </Stack.Navigator>
);

export default StackNavigator;

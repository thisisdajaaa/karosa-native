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
import ShopSettingScreen from "@app/screens/shop/shop-settings";
import PaymentOptionsScreen from "@app/screens/shop/payment-options";
import TermsAndCondScreen from "@app/screens//shop/terms";
import ShopAddressScreen from "@app/screens/shop/edit-address";

import { TabNavigator } from "./tab-navigator";
import ShopMainScreen from "@app/screens/shop/main";

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
    <Stack.Screen name="Shop Settings" component={ShopSettingScreen} />
    <Stack.Screen name="Shop Address" component={ShopAddressScreen} />
    <Stack.Screen name="Payment Options" component={PaymentOptionsScreen} />
    <Stack.Screen
      name="Shop Terms and Conditions"
      component={TermsAndCondScreen}
    />
    <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    <Stack.Screen name="Shop Main" component={ShopMainScreen} />
    <Stack.Screen name="Social Media Accounts" component={SocialMediaScreen} />
    <Stack.Screen name="My Products" component={MyProducts} />
    <Stack.Screen name="Search Product" component={SearchProduct} />
  </Stack.Navigator>
);

export default StackNavigator;

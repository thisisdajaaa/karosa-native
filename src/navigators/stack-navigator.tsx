import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoginScreen from "@app/screens/AuthLogin";
import AuthForgotScreen from "@app/screens/AuthForgot";
import HelpScreen from "@app/screens/AuthHelp";
import SplashScreen from "@app/screens/splash";
import AccountSettingsScreen from "@app/screens/user-account/account-settings";
import EditProfileScreen from "@app/screens/user-account/edit-profile";
import SocialMediaScreen from "@app/screens/user-account/social-media";
import MyProductsScreen from "@app/screens/products/my-products";
import SearchProductScreen from "@app/screens/products/search-product";
import AddProductScreen from "@app/screens/products/add-product";
import AddVariationScreen from "@app/screens/products/add-variation";
import AddWholesaleScreen from "@app/screens/products/add-wholesale";
import ChooseCategoryScreen from "@app/screens/products/choose-category";
import ShippingDetailsScreen from "@app/screens/products/shipping-details";
import NewAddressScreen from "@app/screens/user-account/new-address";
import MyAddressScreen from "@app/screens/user-account/my-address";
import ShopMainScreen from "@app/screens/ShopMain";
import ShopSettingsScreen from "@app/screens/ShopSettings";
import ShopPaymentScreen from "@app/screens/ShopPayment";

import { TabNavigator } from "./tab-navigator";

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Login" component={AuthLoginScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Forgot Password" component={AuthForgotScreen} />
      <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen
        name="Social Media Accounts"
        component={SocialMediaScreen}
      />
      <Stack.Screen name="New Address" component={NewAddressScreen} />
      <Stack.Screen name="My Address" component={MyAddressScreen} />
      <Stack.Screen name="Shop Main" component={ShopMainScreen} />
      <Stack.Screen name="Shop Settings" component={ShopSettingsScreen} />
      <Stack.Screen name="Shop Payment" component={ShopPaymentScreen} />
      <Stack.Screen name="Shop Products" component={MyProductsScreen} />
      <Stack.Screen name="Search Product" component={SearchProductScreen} />
      <Stack.Screen name="Add Product" component={AddProductScreen} />
      <Stack.Screen name="Add Variation" component={AddVariationScreen} />
      <Stack.Screen name="Add Wholesale" component={AddWholesaleScreen} />
      <Stack.Screen name="Shipping Details" component={ShippingDetailsScreen} />
      <Stack.Screen name="Choose Category" component={ChooseCategoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

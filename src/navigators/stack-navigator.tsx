import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoginScreen from "@app/screens/AuthLogin";
import AuthForgotScreen from "@app/screens/AuthForgot";
import HelpScreen from "@app/screens/AuthHelp";
import SplashScreen from "@app/screens/splash";
import ProductNewScreen from "@app/screens/ProductNew";
import AccountSettingsScreen from "@app/screens/user-account/account-settings";
import EditProfileScreen from "@app/screens/user-account/edit-profile";
import SocialMediaScreen from "@app/screens/user-account/social-media";
import MyProductsScreen from "@app/screens/ProductList";
import SearchProductScreen from "@app/screens/products/search-product";
import AddVariationScreen from "@app/screens/ProductVariation";
import AddWholesaleScreen from "@app/screens/ProductWholesale";
import ChooseCategoryScreen from "@app/screens/ProductCategories";
import ShippingDetailsScreen from "@app/screens/ProductShipping";
import NewAddressScreen from "@app/screens/user-account/new-address";
import MyAddressScreen from "@app/screens/user-account/my-address";
import ShopMainScreen from "@app/screens/ShopMain";
import ShopSettingsScreen from "@app/screens/ShopSettings";
import ShopPaymentScreen from "@app/screens/ShopPayment";
import ShopAddressScreen from "@app/screens/ShopAddress";
import ShopEditAddressScreen from "@app/screens/ShopEditAddress";

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
      <Stack.Screen name="Shop Address" component={ShopAddressScreen} />
      <Stack.Screen
        name="Shop Edit Address"
        component={ShopEditAddressScreen}
      />
      <Stack.Screen name="Shop Products" component={MyProductsScreen} />
      <Stack.Screen name="Search Product" component={SearchProductScreen} />
      <Stack.Screen name="Add Product" component={ProductNewScreen} />
      <Stack.Screen name="Add Variation" component={AddVariationScreen} />
      <Stack.Screen name="Add Wholesale" component={AddWholesaleScreen} />
      <Stack.Screen name="Shipping Details" component={ShippingDetailsScreen} />
      <Stack.Screen name="Choose Category" component={ChooseCategoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoginScreen from "@app/screens/AuthLogin";
import AuthForgotScreen from "@app/screens/AuthForgot";
import HelpScreen from "@app/screens/AuthHelp";
import ProductNewScreen from "@app/screens/ProductNew";
import AccountSettingsScreen from "@app/screens/UserAccountSettings";
import EditProfileScreen from "@app/screens/UserAccountEdit";
import SocialMediaScreen from "@app/screens/UserAccountSocialMedia";
import MyProductsScreen from "@app/screens/ProductList";
import SearchMyProductScreen from "@app/screens/ProductSearch";
import AddVariationScreen from "@app/screens/ProductVariation";
import AddWholesaleScreen from "@app/screens/ProductWholesale";
import ChooseCategoryScreen from "@app/screens/ProductCategories";
import ShippingDetailsScreen from "@app/screens/ProductShipping";
import ShopMainScreen from "@app/screens/ShopMain";
import ShopSettingsScreen from "@app/screens/ShopSettings";
import ShopPaymentScreen from "@app/screens/ShopPayment";
import ProductDetailScreen from "@app/screens/ProductDetail";
import ProductReviewsScreen from "@app/screens/ProductReviews";
import AuthPhoneNumberScreen from "@app/screens/AuthPhoneNumber";
import AuthPasswordScreen from "@app/screens/AuthPassword";
import AuthVerificationScreen from "@app/screens/AuthVerification";
import ProductStockPriceScreen from "@app/screens/ProductStockPrice";
import CheckoutScreen from "@app/screens/Checkout";
import HomeSearchScreen from "@app/screens/HomeSearch";
import AddressMain from "@app/screens/AddressMain";
import AddressSearch from "@app/screens/AddressSearch";
import AddressEdit from "@app/screens/AddressEdit";

import { TabNavigator } from "./tab-navigator";

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
      <Stack.Screen
        name="SignUp Phonenumber"
        component={AuthPhoneNumberScreen}
      />
      <Stack.Screen name="SignUp Password" component={AuthPasswordScreen} />
      <Stack.Screen name="SignUp OTP" component={AuthVerificationScreen} />
      <Stack.Screen name="Shop Main" component={ShopMainScreen} />
      <Stack.Screen name="Shop Settings" component={ShopSettingsScreen} />
      <Stack.Screen name="Shop Payment" component={ShopPaymentScreen} />
      <Stack.Screen name="Shop Products" component={MyProductsScreen} />
      <Stack.Screen
        name="Search My Product"
        component={SearchMyProductScreen}
      />
      <Stack.Screen name="Home Search" component={HomeSearchScreen} />
      <Stack.Screen name="Add Product" component={ProductNewScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailScreen} />
      <Stack.Screen name="Product Reviews" component={ProductReviewsScreen} />
      <Stack.Screen name="Add Variation" component={AddVariationScreen} />
      <Stack.Screen
        name="Set Stock and Price"
        component={ProductStockPriceScreen}
      />
      <Stack.Screen name="Add Wholesale" component={AddWholesaleScreen} />
      <Stack.Screen name="Shipping Details" component={ShippingDetailsScreen} />
      <Stack.Screen name="Choose Category" component={ChooseCategoryScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="My Address" component={AddressMain} />
      <Stack.Screen name="Search Address" component={AddressSearch} />
      <Stack.Screen name="Edit Address" component={AddressEdit} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

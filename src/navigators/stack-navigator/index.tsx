import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AboutScreen,
  FaqScreen,
  FriendReferScreen,
  HelpCentreScreen,
  KarosaWalletScreen,
  MessagesScreen,
  PrivacyPolicyScreen,
  PurchasesScreen,
  ToPayScreen,
  ToRateScreen,
  ToReceiveScreen,
  ToShipScreen,
  VouchersScreen,
  WishlistScreen,
  CancelledScreen,
  FinanceScreen,
  ProductsScreen,
  ReportsScreen,
  ReturnsScreen,
  MarketingScreen,
  SalesScreen,
} from "@app/screens/dummy";

const Stack = createStackNavigator();

const MainStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* dummy screens */}
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Friend Refer" component={FriendReferScreen} />
    <Stack.Screen name="FAQ" component={FaqScreen} />
    <Stack.Screen name="Help Centre" component={HelpCentreScreen} />
    <Stack.Screen name="Karosa Wallet" component={KarosaWalletScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="Purchases" component={PurchasesScreen} />
    <Stack.Screen name="To Pay" component={ToPayScreen} />
    <Stack.Screen name="To Rate" component={ToRateScreen} />
    <Stack.Screen name="To Receive" component={ToReceiveScreen} />
    <Stack.Screen name="To Ship" component={ToShipScreen} />
    <Stack.Screen name="Vouchers" component={VouchersScreen} />
    <Stack.Screen name="Wishlist" component={WishlistScreen} />
    <Stack.Screen name="Cancelled" component={CancelledScreen} />
    <Stack.Screen name="Finance" component={FinanceScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Reports" component={ReportsScreen} />
    <Stack.Screen name="Returns" component={ReturnsScreen} />
    <Stack.Screen name="Marketing" component={MarketingScreen} />
    <Stack.Screen name="Sales" component={SalesScreen} />
  </Stack.Navigator>
);

export default MainStack;

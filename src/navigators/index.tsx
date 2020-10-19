import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainTabs from "./bottom-navigator";
import MainStack from "./stack-navigator";

const BaseStack = createStackNavigator();

const BaseNavigator: React.FC = () => (
  <BaseStack.Navigator screenOptions={{ headerShown: false }}>
    <BaseStack.Screen name="Main Tabs" component={MainTabs} />
    <BaseStack.Screen name="Main Stack" component={MainStack} />
  </BaseStack.Navigator>
);

export default BaseNavigator;

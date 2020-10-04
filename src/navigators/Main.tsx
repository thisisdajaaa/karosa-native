import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "../screens";

const AuthStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
}

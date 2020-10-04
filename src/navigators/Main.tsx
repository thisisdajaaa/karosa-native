import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "../screens";

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Onboarding" component={Onboarding} />
    </MainStack.Navigator>
  );
}

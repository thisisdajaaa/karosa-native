import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthMainScreen from "@app/screens/LoginMain";

import StackNavigator from "./stack-navigator";

const BaseStack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <React.Fragment>
      <BaseStack.Navigator screenOptions={{ headerShown: false }}>
        <BaseStack.Screen name="Stack" component={StackNavigator} />
        <BaseStack.Screen name="Auth Main" component={AuthMainScreen} />
      </BaseStack.Navigator>
    </React.Fragment>
  );
};

export default RootNavigator;

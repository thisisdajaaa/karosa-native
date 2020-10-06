import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthMainScreen from "../screens/auth";
import LoginScreen from "../screens/auth/login";
import HelpScreen from "../screens/auth/help";
import ForgotScreen from "../screens/auth/forgot";

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      options={{ headerShown: false }}
      component={LoginScreen}
    />
    <Stack.Screen
      name="Help"
      options={{ headerShown: false }}
      component={HelpScreen}
    />
    <Stack.Screen
      name="Auth Main"
      component={AuthMainScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Forgot Password"
      options={{ headerShown: false }}
      component={ForgotScreen}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

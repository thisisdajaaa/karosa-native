import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@app/screens/auth/login";
import HelpScreen from "@app/screens/auth/help";
import AuthMainScreen from "@app/screens/auth/main";
import ForgotScreen from "@app/screens/auth/forgot";

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth Main" component={AuthMainScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="Forgot Password" component={ForgotScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;

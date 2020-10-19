import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "@app/styles";

import MeBottomNavigator from "./me";

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        labelStyle: { position: "relative", bottom: 4 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MeBottomNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My Basket"
        component={MeBottomNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-basket" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MeBottomNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeBottomNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;

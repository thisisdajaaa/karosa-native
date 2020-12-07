import React, { useRef } from "react";
import { Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { EventArg } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@app/hooks";
import { theme } from "@app/styles";
import Content from "@app/screens/products/my-products/content";
import UserAccountMainScreen from "@app/screens/user-account/main";
import HomeScreen from "@app/screens/home";
import ShopMainScreen from "@app/screens/shop/main";
import AuthMainScreen from "@app/screens/auth/main";
import BasketScreen from "@app/screens/basket";
import NotificationScreen from "@app/screens/notifications";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const MeStack = createStackNavigator();

const mockTopTab = [
  "Recent (1)",
  "Sold Out (2)",
  "Suspended (3)",
  "Discontinued (4)",
];

const MeNavigator: React.FC = () => {
  return (
    <MeStack.Navigator screenOptions={{ headerShown: false }}>
      <MeStack.Screen name="Settings" component={UserAccountMainScreen} />
      <MeStack.Screen name="Shop Main" component={ShopMainScreen} />
    </MeStack.Navigator>
  );
};

const ProductTabs: React.FC = () => {
  return (
    <TopTab.Navigator
      lazy
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.dark20,
        pressColor: theme.colors.primary,
        indicatorStyle: { backgroundColor: theme.colors.primary },
        scrollEnabled: true,
      }}
    >
      {mockTopTab.map((tabName, index) => (
        <React.Fragment key={index}>
          <TopTab.Screen name={tabName} component={Content} />
        </React.Fragment>
      ))}
    </TopTab.Navigator>
  );
};

const TabNavigator: React.FC = () => {
  const { isLoggedIn } = useAuth();

  const sheetRef = useRef<RBSheet>(null);

  const hide = function () {
    sheetRef.current?.close();
  };

  return (
    <>
      <BottomTab.Navigator
        lazy
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          labelStyle: { position: "relative", bottom: 4 },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="My Basket"
          component={BasketScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-basket" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-notifications" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Me"
          component={MeNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person-outline" size={size} color={color} />
            ),
          }}
          listeners={{
            tabPress: (e: EventArg<"tabPress", true, undefined>) => {
              if (!isLoggedIn) {
                // Prevent default action
                e.preventDefault();
                sheetRef.current?.open();
              }
            },
          }}
        />
      </BottomTab.Navigator>
      <RBSheet
        ref={sheetRef}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={Dimensions.get("window").height * 0.9}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: "center",
          },
        }}
      >
        <AuthMainScreen onLogin={hide} />
      </RBSheet>
    </>
  );
};

export { ProductTabs, TabNavigator };
import React, { useRef } from "react";
import { Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { EventArg, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@app/hooks";
import { theme } from "@app/styles";
import UserAccountMainScreen from "@app/screens/user-account/main";
import HomeScreen from "@app/screens/home";
import ShopMainScreen from "@app/screens/shop/main";
import routes from "@app/navigators/routes";
import AuthMainScreen from "@app/screens/auth/main";

const Tab = createBottomTabNavigator();
const MeStack = createStackNavigator();

const MeNavigator: React.FC = () => {
  return (
    <MeStack.Navigator screenOptions={{ headerShown: false }}>
      <MeStack.Screen name="Settings" component={UserAccountMainScreen} />
      <MeStack.Screen name="Shop Main" component={ShopMainScreen} />
    </MeStack.Navigator>
  );
};

const BottomTabNavigator: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const { navigate } = useNavigation();

  const showLoginPrompt = () => navigate(routes.AUTH_MAIN);
  const sheetRef = useRef<RBSheet>(null);

  const hide = function () {
    sheetRef.current?.close();
  };

  return (
    <>
      <Tab.Navigator
        lazy
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          labelStyle: { position: "relative", bottom: 4 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="My Basket"
          component={UserAccountMainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-basket" size={size} color={color} />
            ),
          }}
          listeners={{
            tabPress: (e: EventArg<"tabPress", true, undefined>) => {
              if (!isLoggedIn) {
                // Prevent default action
                e.preventDefault();
                showLoginPrompt();
              }
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={UserAccountMainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-notifications" size={size} color={color} />
            ),
          }}
          listeners={{
            tabPress: (e: EventArg<"tabPress", true, undefined>) => {
              if (!isLoggedIn) {
                // Prevent default action
                e.preventDefault();
                showLoginPrompt();
              }
            },
          }}
        />
        <Tab.Screen
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
                // showLoginPrompt();
                sheetRef.current?.open();
              }
            },
          }}
        />
      </Tab.Navigator>
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

export default BottomTabNavigator;

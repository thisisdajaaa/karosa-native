import React, { FC, Fragment, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { EventArg } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useAuth, useMemoizedSelector, useUpdateEffect } from "@app/hooks";
import { theme } from "@app/styles";
import { selectors } from "@app/redux/auth";
import UserAccountMainScreen from "@app/screens/UserAccountMain";
import AuthMainScreen from "@app/screens/AuthMain";
import BasketScreen from "@app/screens/Basket";
import NotificationScreen from "@app/screens/Notification";
import ProductListContent from "@app/templates/ProductList/MainContent";
import HomeScreen from "@app/screens/Home";
import routes from "@app/navigators/routes";
import Icon from "@app/atoms/Icon/Icon";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const mockTopTab = [
  "Recent (1)",
  "Sold Out (2)",
  "Suspended (3)",
  "Discontinued (4)",
];

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
          <TopTab.Screen name={tabName} component={ProductListContent} />
        </React.Fragment>
      ))}
    </TopTab.Navigator>
  );
};

const TabNavigator: FC = () => {
  const sheetRef = useRef<RBSheet>(null);

  const { isLoggedIn } = useAuth();

  const authEntryContext = useMemoizedSelector(selectors.getAuthEntryContext);

  useUpdateEffect(() => {
    if (authEntryContext.isBack) sheetRef.current?.open();
  }, [authEntryContext.isBack]);

  return (
    <Fragment>
      <BottomTab.Navigator
        lazy
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          labelStyle: { position: "relative", bottom: 4 },
        }}
      >
        <BottomTab.Screen
          name={routes.HOME}
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon group="common" name="home" height={24} width={24} />
            ),
          }}
        />
        <BottomTab.Screen
          name={routes.MY_BASKET}
          component={BasketScreen}
          options={{
            tabBarIcon: () => (
              <Icon group="common" name="orders" height={24} width={24} />
            ),
          }}
        />
        <BottomTab.Screen
          name={routes.NOTIFICATIONS}
          component={NotificationScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                group="common"
                name="notifications"
                height={24}
                width={24}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name={routes.ACCOUNTS_MAIN}
          component={UserAccountMainScreen}
          options={{
            tabBarIcon: () => (
              <Icon group="common" name="account" height={24} width={24} />
            ),
          }}
          listeners={{
            tabPress: (e: EventArg<"tabPress", true, undefined>) => {
              if (!isLoggedIn) {
                e.preventDefault();
                sheetRef.current?.open();
              }
            },
          }}
        />
      </BottomTab.Navigator>

      <AuthMainScreen sheetRef={sheetRef} />
    </Fragment>
  );
};

export { ProductTabs, TabNavigator };

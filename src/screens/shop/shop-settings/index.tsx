import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { ShopRequest } from "@app/redux/shop/models";
import { actions } from "@app/redux/shop";
import { useDispatch } from "react-redux";

// import axios from "axios";

import routes from "@app/navigators/routes";

import Choices from "./choices";
import { styles } from "./styles";

const ShopSettingScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Shop Settings",
      press: {
        left: () => navigate(routes.SHOP_MAIN),
      },
    },
    customStyles: styles.container,
  };

  const callShopApi = useCallback(
    (request: ShopRequest) => dispatch(actions.callShopApi.request(request)),
    [dispatch]
  );

  useEffect(() => {
    const request: ShopRequest = {
      isActive: true,
    };

    callShopApi(request);
  }, [callShopApi]);

  return (
    <Screen {...screenProps}>
      <View style={styles.mainContainer}>
        <Choices />
      </View>
    </Screen>
  );
};

export default ShopSettingScreen;

import React, { useCallback, useEffect } from "react";
import { ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { ShopRequest } from "@app/redux/shop/models";
import { actions, selectors } from "@app/redux/shop";
import { useDispatch } from "react-redux";
import routes from "@app/navigators/routes";

import { useMemoizedSelector } from "@app/hooks";

import Choices from "./choices";
import { styles } from "./styles";
import ProfileHeader from "./profile-header";
const ShopSettingScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Shop Settings",
      text: {
        right: "Save",
      },
      press: {
        left: () => navigate(routes.SHOP_MAIN),
        right: () => processSaving(),
      },
    },
    customStyles: styles.container,
  };

  const callShopApi = useCallback(
    (request: ShopRequest) => dispatch(actions.callShopApi.request(request)),
    [dispatch]
  );

  const processSaving = useCallback(() => {}, []);

  useEffect(() => {
    callShopApi();
  }, [callShopApi]);

  return (
    <Screen {...screenProps}>
      <View style={styles.mainContainer}>
        <ProfileHeader />
        <Choices />
      </View>
    </Screen>
  );
};

export default ShopSettingScreen;

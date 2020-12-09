import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { Screen } from "@app/components/base-screen";
import { AppButton } from "@app/components/button";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as ButtonProps } from "@app/components/button/types";
import { BaseText } from "@app/components/base-text";
import { Separator } from "@app/components/separator";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import routes from "@app/navigators/routes";
import { useDispatch } from "react-redux";
import { ShopActivationRequest } from "@app/redux/shop/models";
import { actions } from "@app/redux/shop";

const TermsAndCondScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const callActivateShopApi = useCallback(
    (request: ShopActivationRequest) =>
      dispatch(actions.callActivateShopApi.request(request)),
    [dispatch]
  );
  // const handlePress = () => {
  //   const request: ShopActivationRequest = {
  //     isActive: true,
  //   };

  //   callActivateShopApi(request);
  // };



  const screenProps: ScreenProps = {
    header: {
      title: "Terms and Conditions",
    },
    customStyles: styles.container,
  };

  const agreeButtonProps: ButtonProps = {
    onPress: () => {
      callActivateShopApi({ isActive: true });
      navigate(routes.SHOP_SETTINGS);
    },

    title: "I Agree",
    containerStyle: styles.agreeButtonContainer,
    textStyle: styles.txtAgreeButton,
  };

  const notNowButtonProps: ButtonProps = {
    onPress: () => navigate(routes.SHOP_MAIN),
    title: "Not Now",
    containerStyle: styles.notNowButtonContainer,
    textStyle: styles.txtNotNow,
  };

  return (
    <Screen {...screenProps}>
      <Separator />
      <View style={styles.subContainer}>
        <View style={styles.paragContainer}>
          <BaseText style={styles.paragHeader}>Lorem, ipsum.</BaseText>
          <BaseText style={styles.paragBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minus labore facere, reiciendis enim maxime a perspiciatis. Ut,
            deserunt totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae minus labore facere, reiciendis enim maxime a
            perspiciatis. Ut, deserunt totam.
          </BaseText>
        </View>

        <View style={styles.paragContainer}>
          <BaseText style={styles.paragHeader}>Lorem, ipsum.</BaseText>
          <BaseText style={styles.paragBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minus labore facere, reiciendis enim maxime a perspiciatis. Ut,
            deserunt totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae minus labore facere, reiciendis enim maxime a
            perspiciatis. Ut, deserunt totam.
          </BaseText>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton {...agreeButtonProps} />
          <AppButton {...notNowButtonProps} />
        </View>
      </View>
    </Screen>
  );
};

export default TermsAndCondScreen;

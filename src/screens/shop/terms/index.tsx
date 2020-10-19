import React from "react";
import { View } from "react-native";
import { Screen } from "@app/components/base-screen";
import { AppButton } from "@app/components/button";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as ButtonProps } from "@app/components/button/types";
import { BaseText } from "@app/components/base-text";
import { Separator } from "@app/components/separator";

import { styles } from "./styles";

const TermsAndCondScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Terms and Conditions",
    },
    customStyles: styles.container,
  };

  const agreeButtonProps: ButtonProps = {
    onPress: () => console.log("I agree"),
    title: "I Agree",
    containerStyle: styles.agreeButtonContainer,
    textStyle: styles.txtAgreeButton,
  };

  const notNowButtonProps: ButtonProps = {
    onPress: () => console.log("I agree"),
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

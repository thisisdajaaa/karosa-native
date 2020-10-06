import React from "react";
import { View } from "react-native";

import { Screen } from "../../atoms/base-screen";
import { AppButton } from "../../atoms/button";
import { Props as ScreenProps } from "../../atoms/base-screen/types";
import { Props as ButtonProps } from "../../atoms/button/types";
import { BaseText } from "../../atoms/base-text";
import { Separator } from "../../atoms/separator";

import { styles } from "./styles";

const TermsAndCond: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Terms and Conditions",
    },
    customStyles: styles.container,
  };

  const agreeButtonProps: ButtonProps = {
    onPress: () => console.log("I agree"),
    title: "I Agree",
    containerStyle: {
      backgroundColor: "#0AA351",
      minWidth: 330,
      width: "100%",
      marginVertical: 6,
    },
    textStyle: {
      color: "white",
    },
  };

  const notNowButtonProps: ButtonProps = {
    onPress: () => console.log("I agree"),
    title: "Not Now",
    containerStyle: {
      backgroundColor: "#ECECEC",
      minWidth: 330,
      width: "100%",
    },
    textStyle: {
      color: "#1C1C1C",
    },
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

export default TermsAndCond;

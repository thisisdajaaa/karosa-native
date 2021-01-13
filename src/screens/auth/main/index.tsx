import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@app/components/button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";
import { Props } from "./types";

const AuthMainScreen: React.FC<Props> = (props) => {
  const { navigate } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      borderBottom: false,
      text: {
        left: "Login",
        right: "Help",
      },
      press: {
        right: () => navigate("Stack", { screen: routes.AUTH_HELP }),
      },
    },
    customStyles: styles.container,
  };

  const fbButtonProps: ButtonProps = {
    title: "Continue with Facebook",
    icon: {
      left: <FontAwesome name="facebook-official" style={styles.buttonIcon} />,
    },
    containerStyle: styles.fbButtonContainer,
    onPress: () => console.log("FB login"),
  };

  const gmailButtonProps: ButtonProps = {
    title: "Continue with Google",
    icon: {
      left: <AntDesign name="google" style={styles.buttonIcon} />,
    },
    containerStyle: styles.gmailButtonContainer,
    onPress: () => console.log("Gmail login"),
  };

  const signInButtonProps: ButtonProps = {
    title: "Phone number",
    containerStyle: styles.signInButtonContainer,
    onPress: () => {
      navigate("Stack", { screen: routes.AUTH_PHONE_NUMBER });
      props.onLogin && props.onLogin();
    },
  };

  return (
    <Screen {...screenProps}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/logo-red.png")}
        />
      </View>

      <AppButton {...fbButtonProps} />
      <AppButton {...gmailButtonProps} />

      <View style={styles.hrContainer}>
        <View style={styles.hrLine} />
        <View>
          <BaseText customStyles={styles.txtOr}>or</BaseText>
        </View>
        <View style={styles.hrLine} />
      </View>

      <AppButton {...signInButtonProps} />

      <BaseText customStyles={styles.noAccContainer}>
        Don't have an account?
        <BaseText customStyles={styles.txtSignUp}> Sign up</BaseText>
      </BaseText>
    </Screen>
  );
};

export default AuthMainScreen;

import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppButton } from "../../atoms/button";
import { BaseText } from "../../atoms/base-text";
import { Screen } from "../../atoms/base-screen";
import { Props as ButtonProps } from "../../atoms/button/types";
import { Props as ScreenProps } from "../../atoms/base-screen/types";
import routes from "../../../navigators/routes";

import { styles } from "./styles";

const AuthMain: React.FC = () => {
  const { navigate } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      text: {
        left: "Login",
        right: "Help",
      },
      press: {
        right: () => navigate(routes.AUTH_HELP),
      },
    },
    customStyles: styles.container,
  };

  const fbButtonProps: ButtonProps = {
    title: "Continue with Facebook",
    icon: {
      left: <FontAwesome name="facebook-official" size={24} color="white" />,
    },
    containerStyle: {
      backgroundColor: "#3C579B",
    },
    onPress: () => console.log("FB login"),
  };

  const gmailButtonProps: ButtonProps = {
    title: "Continue with Google",
    icon: {
      left: <AntDesign name="google" size={24} color="white" />,
    },
    containerStyle: {
      backgroundColor: "#DD4C37",
      marginVertical: 17,
    },
    onPress: () => console.log("Gmail login"),
  };

  const signInButtonProps: ButtonProps = {
    title: "Phone number / Username / Email",
    containerStyle: {
      backgroundColor: "#0AA351",
      marginVertical: 17,
    },
    onPress: () => navigate(routes.AUTH_LOGIN),
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

export default AuthMain;

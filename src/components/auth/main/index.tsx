import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppButton } from "../../atoms/button";
import { BaseText } from "../../atoms/base-text";
import { Header } from "../../header";
import { Props as ButtonProps } from "../../atoms/button/types";
import { Props as HeaderProps } from "../../header/types";
import routes from "../../../navigators/routes";

import { styles } from "./styles";

const AuthMain: React.FC = () => {
  const { navigate } = useNavigation();

  const headerProps: HeaderProps = {
    text: {
      left: "Login",
      right: "Help",
    },
    press: {
      right: () => navigate(routes.HELP),
    },
  };

  const fbButtonProps: ButtonProps = {
    onPress: () => console.log("FB login"),
    title: "Continue with Facebook",
    icon: {
      left: <FontAwesome name="facebook-official" size={24} color="white" />,
    },
    containerStyle: {
      backgroundColor: "#3C579B",
    },
  };

  const gmailButtonProps: ButtonProps = {
    onPress: () => console.log("Gmail login"),
    title: "Continue with Google",
    icon: {
      left: <AntDesign name="google" size={24} color="white" />,
    },
    containerStyle: {
      backgroundColor: "#DD4C37",
      marginVertical: 17,
    },
  };

  const signInButtonProps: ButtonProps = {
    onPress: () => navigate(routes.LOGIN),
    title: "Phone number / Username / Email",
    containerStyle: {
      backgroundColor: "#0AA351",
      marginVertical: 17,
    },
  };

  return (
    <>
      <Header {...headerProps} />
      <View style={styles.container}>
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
      </View>
    </>
  );
};

export default AuthMain;

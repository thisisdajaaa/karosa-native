import React from "react";
import { Props as HeaderProps } from "../../header/types";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../header";

const MyAddress: React.FC = () => {
  const { goBack } = useNavigation();
  const headerProps: HeaderProps = {
    iconName: "arrow-back",
    title: "My Addresses",
    press: {
      left: () => goBack(),
    },
  };
  return <Header {...headerProps} />;
};
export default MyAddress;

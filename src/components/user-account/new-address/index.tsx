import React from "react";

import { Props as HeaderProps } from "../../atoms/base-screen/types";
import { Screen } from "../../atoms/base-screen";
import { useNavigation } from "@react-navigation/native";

const NewAddress: React.FC = () => {
  const { goBack } = useNavigation();

  const headerProps: HeaderProps = {
    header: {
      iconName: "arrow-back",
      title: "New Address",
      press: {
        left: () => goBack(),
      },
    },
  };
  return <Screen {...headerProps}></Screen>;
};
export default NewAddress;

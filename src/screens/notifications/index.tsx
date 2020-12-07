import React from "react";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";

const NotificationScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Notification",
    },
    customStyles: styles.container,
  };

  return (
    <Screen {...screenProps}>
      <BaseText>NOTIFICATION</BaseText>
    </Screen>
  );
};

export default NotificationScreen;

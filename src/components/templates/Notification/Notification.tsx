/**
 *
 * Notification
 * @format
 *
 */

import React, { FC } from "react";
import Header from "@app/molecules/Header";
import { TextInputMask } from "react-native-masked-text";

import NotificationStyles from "./styles";

const NotificationTemplate: FC = () => {
  const [state, setstate] = React.useState<string | undefined>("");

  return (
    <>
      <Header
        hasBottomDivider
        centerComponent={{
          text: "Notification",
          style: NotificationStyles.txtHeader,
        }}
      />
      <TextInputMask
        placeholder="DD/MM/YYYY"
        type={"datetime"}
        options={{
          format: "DD/MM/YYYY",
        }}
        value={state}
        returnKeyType="done"
        onChangeText={(text) => {
          setstate(text);
        }}
      />
    </>
  );
};

export default NotificationTemplate;

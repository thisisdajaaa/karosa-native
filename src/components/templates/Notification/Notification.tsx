/**
 *
 * Notification
 * @format
 *
 */

import React, { FC } from "react";
import Header from "@app/molecules/Header";

import NotificationStyles from "./styles";

const NotificationTemplate: FC = () => {
  return (
    <>
      <Header
        hasBottomDivider
        centerComponent={{
          text: "Notification",
          style: NotificationStyles.txtHeader,
        }}
      />
    </>
  );
};

export default NotificationTemplate;

/**
 * CommonIcons
 * @format
 *
 */
import React, { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";

import ChatIcon from "./chat.svg";
import CameraIcon from "./camera.svg";
import BackIcon from "./back.svg";
import SettingsIcon from "./settings.svg";
import CircleIcon from "./circle.svg";
import OutlineHeartIcon from "./outline-heart.svg";
import SolidHeartIcon from "./solid-heart.svg";
import RibbonIcon from "./ribbon.svg";
import KarosaIcon from "./karosa.svg";
import MoreIcon from "./more.svg";
import ToPayIcon from "./to-pay.svg";
import ToRateIcon from "./to-rate.svg";
import ToReceiveIcon from "./to-receive.svg";
import ToShipIcon from "./to-ship.svg";

const CommonIcons = (
  name: string,
  extraStyle: StyleProp<ViewStyle>,
  width: number,
  height: number
): ReactElement => {
  let widthProps = {};
  let heightProps = {};

  if (width) widthProps = { width };

  if (height) heightProps = { heightProps };

  const icons = {
    chatIcon: <ChatIcon style={extraStyle} {...widthProps} {...heightProps} />,
    moreIcon: <MoreIcon style={extraStyle} {...widthProps} {...heightProps} />,
    backIcon: <BackIcon style={extraStyle} {...widthProps} {...heightProps} />,
    cameraIcon: (
      <CameraIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    settingsIcon: (
      <SettingsIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    circleIcon: (
      <CircleIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    karosaIcon: (
      <KarosaIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    ribbonIcon: (
      <RibbonIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    outlineHeartIcon: (
      <OutlineHeartIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    solidHeartIcon: (
      <SolidHeartIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    toPayIcon: (
      <ToPayIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    toRateIcon: (
      <ToRateIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    toReceiveIcon: (
      <ToReceiveIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    toShipIcon: (
      <ToShipIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
  };

  return icons[name];
};

export default CommonIcons;

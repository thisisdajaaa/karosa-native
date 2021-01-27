/**
 * AccountSettingsIcons
 * @format
 *
 */
import React, { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";

import CoinsIcon from "./coins.svg";
import FollowersIcon from "./followers.svg";
import ChevronIcon from "./chevron.svg";
import TwitterIcon from "./twitter.svg";
import FbIcon from "./fb.svg";
import InstagramIcon from "./instagram.svg";

const AccountSettingsIcons = (
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
    fbIcon: <FbIcon style={extraStyle} {...widthProps} {...heightProps} />,
    coinsIcon: (
      <CoinsIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    followersIcon: (
      <FollowersIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    chevronIcon: (
      <ChevronIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    twitterIcon: (
      <TwitterIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    instagramIcon: (
      <InstagramIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
  };

  return icons[name];
};

export default AccountSettingsIcons;

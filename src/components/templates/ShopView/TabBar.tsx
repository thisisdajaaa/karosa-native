/**
 *
 * TabBar
 * @format
 *
 */

import React, { FC } from "react";
import { MaterialTopTabBar } from "@react-navigation/material-top-tabs";
import { useUpdateEffect } from "@app/hooks";

import type { TabBarProps } from "./types";

const TabBar: FC<TabBarProps> = ({ onIndexChange, ...props }) => {
  const { index } = props.state;

  useUpdateEffect(() => {
    onIndexChange?.(index);
  }, [onIndexChange, index]);

  return <MaterialTopTabBar {...props} />;
};

export default TabBar;

/**
 *
 * MediaQuery
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { DIMENS } from "@app/styles";

import type { PropsType } from "./types";
import { mediaQuery } from "./config";

const MediaQuery: FC<PropsType> = (props) => {
  const { children } = props;

  const val = mediaQuery(props, DIMENS.screenWidth, DIMENS.screenHeight);

  if (!val) return null;

  return <Fragment>{children}</Fragment>;
};

export default MediaQuery;

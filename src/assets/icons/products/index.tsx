/**
 * ProductsIcons
 * @format
 *
 */
import React, { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";

import CouponIcon from "./coupon.svg";
import WarningIcon from "./warning.svg";
import SortIcon from "./sort.svg";
import FollowIcon from "./follow.svg";
import ListBulletIcon from "./list-bullet.svg";
import ListGridIcon from "./list-grid.svg";
import EditIcon from "./edit.svg";
import RemoveIcon from "./remove.svg";
import ShareIcon from "./share.svg";
import ReportIcon from "./report.svg";
import BlockIcon from "./block.svg";

const ProductsIcons = (
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
    sortIcon: <SortIcon style={extraStyle} {...widthProps} {...heightProps} />,
    editIcon: <EditIcon style={extraStyle} {...widthProps} {...heightProps} />,
    removeIcon: (
      <RemoveIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    shareIcon: (
      <ShareIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    reportIcon: (
      <ReportIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    blockIcon: (
      <BlockIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    couponIcon: (
      <CouponIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    warningIcon: (
      <WarningIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    followIcon: (
      <FollowIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    listBulletIcon: (
      <ListBulletIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
    listGridIcon: (
      <ListGridIcon style={extraStyle} {...widthProps} {...heightProps} />
    ),
  };

  return icons[name];
};

export default ProductsIcons;

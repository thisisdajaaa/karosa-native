/**
 *
 * ListImage
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import FormImagePicker from "@app/molecules/FormImagePicker";

import { defaultVariation } from "./config";
import type { PropsType } from "./types";

const ListImage: FC<PropsType> = (props) => {
  const { name, hasBottomDivider } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <FormImagePicker name={name} variation={defaultVariation} />
    </ListItem>
  );
};

export default ListImage;

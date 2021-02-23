/**
 *
 * ListImage
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import FormImagePicker from "@app/molecules/FormImagePicker";

import type { PropsType } from "./types";
import { DEF_VARIATION } from "./config";

const ListImage: FC<PropsType> = (props) => {
  const { name, hasBottomDivider } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <FormImagePicker name={name} variation={DEF_VARIATION} />
    </ListItem>
  );
};

export default ListImage;

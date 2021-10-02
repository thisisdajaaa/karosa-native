/**
 *
 * Chip
 * @format
 *
 */

import React, { FC } from "react";
import { Chip as RnChip } from "react-native-elements";

import ChipConfig from "./config";
import type { PropsType } from "./types";
import ChipStyles from "./styles";
import { theme } from "@app/styles";
import Icon from "@app/atoms/Icon";

const Chip: FC<PropsType> = (props) => {
  const { selected } = props;

  return (
    <RnChip
      title="Cash on Delivery"
      buttonStyle={
        selected
          ? {
              borderRadius: 3,
              borderColor: theme.colors.primary,
              backgroundColor: theme.colors.green15,
              width: 180,
            }
          : {
              borderRadius: 3,
              borderColor: theme.colors.dark30,
              width: 180,
            }
      }
      titleStyle={
        selected
          ? {
              color: theme.colors.primary,
            }
          : {
              color: theme.colors.dark30,
            }
      }
      type="outline"
      icon={
        <Icon
          group="checkout"
          name="coins"
          height={24}
          width={24}
          color="red"
          extraStyle={{ marginRight: 8 }}
        />
      }
    />
  );
};

export default Chip;

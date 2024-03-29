/**
 *
 * Chip
 * @format
 *
 */

import React, { FC } from "react";
import { Chip as RnChip } from "react-native-elements";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { ICON_SIZE } from "./config";
import ChipStyles from "./styles";

const Chip: FC<PropsType> = (props) => {
  const { selected, onPress, title, iconName, iconGroup, width } = props;

  return (
    <RnChip
      onPress={onPress}
      title={title}
      buttonStyle={
        selected
          ? { ...ChipStyles.selectedContainer, width }
          : { ...ChipStyles.unselectedContainer, width }
      }
      titleStyle={selected ? ChipStyles.txtSelected : ChipStyles.txtUnselected}
      type="outline"
      icon={
        iconGroup && iconName ? (
          <Icon
            group={iconGroup}
            name={iconName}
            height={ICON_SIZE}
            width={ICON_SIZE}
            extraStyle={ChipStyles.iconContainer}
          />
        ) : undefined
      }
    />
  );
};

export default Chip;

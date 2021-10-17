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
  const { selected, onPress, title, iconName, iconGroup } = props;

  return (
    <RnChip
      onPress={onPress}
      title={title}
      buttonStyle={
        selected ? ChipStyles.selectedContainer : ChipStyles.unselectedContainer
      }
      titleStyle={selected ? ChipStyles.txtSelected : ChipStyles.txtUnselected}
      type="outline"
      icon={
        <Icon
          group={iconGroup}
          name={iconName}
          height={ICON_SIZE}
          width={ICON_SIZE}
          extraStyle={ChipStyles.iconContainer}
        />
      }
    />
  );
};

export default Chip;

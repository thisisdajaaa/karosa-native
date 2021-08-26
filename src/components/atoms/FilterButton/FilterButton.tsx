/**
 *
 * FilterButton
 * @format
 *
 */

import React, { FC } from "react";
import { Button } from "react-native-elements";
import type { PropsType } from "./types";
import FilterButtonStyles from "./styles";

const FilterButton: FC<PropsType> = (props) => {
  const { onPress, title, icon, buttonStyle } = props;

  const onClick = () => {
    onPress();
  };

  return (
    <Button
      onPress={onClick}
      title={title}
      iconRight={true}
      iconContainerStyle={FilterButtonStyles.iconContainer}
      buttonStyle={buttonStyle || FilterButtonStyles.bgNeutral}
      icon={icon}
      containerStyle={FilterButtonStyles.container}
      titleStyle={FilterButtonStyles.title}
      type={"outline"}
    />
  );
};

export default FilterButton;

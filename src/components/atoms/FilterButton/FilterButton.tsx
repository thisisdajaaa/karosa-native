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
<<<<<<< HEAD
  const { onPress, title, icon, buttonStyle, titleStyle, containerStyle } =
    props;
=======
  const { onPress, title, icon, buttonStyle } = props;
>>>>>>> a331fff... feat(productdetail modal): added some coding to highlight the variations selected

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
<<<<<<< HEAD
      containerStyle={[FilterButtonStyles.container, containerStyle]}
      titleStyle={[FilterButtonStyles.title, titleStyle]}
=======
      containerStyle={FilterButtonStyles.container}
      titleStyle={FilterButtonStyles.title}
>>>>>>> a331fff... feat(productdetail modal): added some coding to highlight the variations selected
      type={"outline"}
    />
  );
};

export default FilterButton;

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
<<<<<<< HEAD
  const { onPress, title, icon, buttonStyle, titleStyle, containerStyle } =
    props;
=======
  const { onPress, title, icon, buttonStyle } = props;
>>>>>>> a331fff... feat(productdetail modal): added some coding to highlight the variations selected
=======
  const { onPress, title, icon, buttonStyle, titleStyle, containerStyle } =
    props;
>>>>>>> 3018a6a... style(product details of image layout and buttons): image layout changes and buttons

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
<<<<<<< HEAD
      containerStyle={[FilterButtonStyles.container, containerStyle]}
      titleStyle={[FilterButtonStyles.title, titleStyle]}
=======
      containerStyle={FilterButtonStyles.container}
      titleStyle={FilterButtonStyles.title}
>>>>>>> a331fff... feat(productdetail modal): added some coding to highlight the variations selected
=======
      containerStyle={[FilterButtonStyles.container, containerStyle]}
      titleStyle={[FilterButtonStyles.title, titleStyle]}
>>>>>>> 3018a6a... style(product details of image layout and buttons): image layout changes and buttons
      type={"outline"}
    />
  );
};

export default FilterButton;

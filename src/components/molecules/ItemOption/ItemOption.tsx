/**
 *
 * ItemOption
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";

const ItemOption: FC<PropsType> = (props) => {
  const { variation, image, onDelete, itemName } = props;

  switch (variation) {
    case 1:
      return (
        <VariationOne
          variation={variation}
          image={image}
          itemName={itemName}
          onDelete={onDelete}
        />
      );
    case 2:
      return (
        <VariationTwo
          variation={variation}
          itemName={itemName}
          onDelete={onDelete}
        />
      );
    default:
      return (
        <VariationOne
          variation={variation}
          image={image}
          itemName={itemName}
          onDelete={onDelete}
        />
      );
  }
};

export default ItemOption;

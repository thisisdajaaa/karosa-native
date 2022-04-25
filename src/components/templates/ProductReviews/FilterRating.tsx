/**
 *
 * FilterRating
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import Icon from "@app/atoms/Icon";

import type { FilterRatingProps } from "./types";

const FilterRating: FC<FilterRatingProps> = (props) => {
  const { startingValue } = props;

  const displayStars = () => {
    const stars: ReactElement[] = [];

    for (let i = 1; i <= 5; i++) {
      i > startingValue
        ? stars.push(
            <Icon
              key={i}
              group="common"
              name="emptyStar"
              height={12}
              width={12}
            />
          )
        : stars.push(
            <Icon key={i} group="common" name="star" height={12} width={12} />
          );
    }

    return stars;
  };

  return <>{displayStars()}</>;
};

export default FilterRating;

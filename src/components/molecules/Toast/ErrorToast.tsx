import React, { FC, ComponentProps } from "react";
import Icon from "@app/atoms/Icon";
import { IMAGE_SIZE } from "./config";
import BaseToast from "./BaseToast";

export const ErrorToast: FC<ComponentProps<typeof BaseToast>> = (props) => {
  return (
    <BaseToast
      {...props}
      iconElement={
        <Icon
          group="common"
          name="warning"
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
        />
      }
    />
  );
};

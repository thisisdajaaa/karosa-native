/**
 *
 * ShopEditAddress
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { theme } from "@app/styles";
import type { PropsType as ListInputType } from "@app/components/organisms/ListInput/types";
import Header from "@app/components/molecules/Header";

import type { PropsType } from "./types";
import ShopEditAddressStyles from "./styles";

const ShopEditAddress: FC<PropsType> = (props) => {
  const { onBack } = props;

  const fullName;

  return (
    <Fragment>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Edit Address",
          style: ShopEditAddressStyles.txtHeader,
        }}
      />
    </Fragment>
  );
};

export default ShopEditAddress;

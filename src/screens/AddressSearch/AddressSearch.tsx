/**
 *
 * AddressSearch
 * @format
 *
 */

import React, { FC } from "react";

import type { AddressMainProps } from "./types";
import AddressSearchTemplate from "@app/templates/AddressSearch";
import { RouteProp, useRoute } from "@react-navigation/native";

const AddressSearch: FC = () => {
  const { params } = useRoute<RouteProp<AddressMainProps, "AddressLocation">>();

  return (
    <AddressSearchTemplate
      latitude={params.latitude}
      longitude={params.longitude}
    />
  );
};

export default AddressSearch;

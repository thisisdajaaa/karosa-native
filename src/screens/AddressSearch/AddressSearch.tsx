/**
 *
 * AddressSearch
 * @format
 *
 */

import React, { FC } from "react";

// import AddressSearchConfig from "./config";
import type { AddressMainProps, PropsType } from "./types";
// import AddressSearchStyles from "./styles";
import AddressSearchTemplate from "@app/components/templates/AddressSearchTemplate";
import { RouteProp, useRoute } from "@react-navigation/native";

const AddressSearch: FC<PropsType> = (props) => {
  const {} = props;

  const { params } = useRoute<RouteProp<AddressMainProps, "AddressLocation">>();

  return (
    <AddressSearchTemplate
      latitude={params.latitude}
      longitude={params.longitude}
    />
  );
};

export default AddressSearch;

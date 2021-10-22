/**
 *
 * AddressSearch
 * @format
 *
 */

import React, { FC } from "react";

import type { AddressMainProps, PropsType } from "./types";
import AddressSearchTemplate from "@app/components/templates/AddressSearchTemplate";
import { RouteProp, useRoute } from "@react-navigation/native";
// import { useMemoizedSelector } from "@app/hooks";
// import { actions, selectors } from "@app/redux/address";
// import { useDispatch } from "react-redux";
// import { UserCoordinates } from "@app/redux/address/models";
// import { FormikContext, useFormik } from "formik";

const AddressSearch: FC<PropsType> = (props) => {
  const {} = props;
  const { params } = useRoute<RouteProp<AddressMainProps, "AddressLocation">>();

  // const action = {
  //   setAddressCoordinates: useCallback(
  //     (values: UserCoordinates) =>
  //       dispatch(actions.setAddressCoordinates(values)),
  //     [dispatch]
  //   ),
  // };

  // const handleSubmit = (values: UserCoordinates) => {

  //   action.setAddressCoordinates();
  // };
  // const newCoordinates = useMemoizedSelector(selectors.getCoordinates);

  // const formikBag = useFormik({
  //   initialValues: newCoordinates,
  //   onSubmit: handleSubmit,
  // });

  return (
    <AddressSearchTemplate
      latitude={params.latitude}
      longitude={params.longitude}
    />
  );
};

export default AddressSearch;

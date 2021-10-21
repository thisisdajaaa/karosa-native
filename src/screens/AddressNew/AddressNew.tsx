/**
 *
 * AddressNew
 * @format
 *
 */

import React, { FC, useCallback, useEffect, useState } from "react";

// import AddressNewConfig from "./config";
import type { AddressNewProps, PropsType } from "./types";
// import AddressNewStyles from "./styles";
import { useDispatch } from "react-redux";
import AddressNewTemplate from "@app/components/templates/AddressNewTemplate";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/address";
import { NewAddressForm } from "@app/redux/address/models";
import routes from "@app/navigators/routes";

const AddressNew: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const { params } = useRoute<RouteProp<AddressNewProps, "AddressLocation">>();

  const setNewAddressForm = useCallback(
    (values: NewAddressForm) => dispatch(actions.setNewAddress(values)),
    [dispatch]
  );

  const handleSubmit = (values: NewAddressForm) => {
    setNewAddressForm(values);
    console.log(values);
    navigate(routes.ACCOUNTS_ADDRESS);
  };

  const newAddressForm = useMemoizedSelector(selectors.getNewAddressForm);
  const formikBag = useFormik({
    initialValues: newAddressForm,
    onSubmit: handleSubmit,
  });
  return (
    <FormikContext.Provider value={formikBag}>
      <AddressNewTemplate
        details={params.details}
        latitude={params.latitude}
        longitude={params.longitude}></AddressNewTemplate>
    </FormikContext.Provider>
  );
};

export default AddressNew;
